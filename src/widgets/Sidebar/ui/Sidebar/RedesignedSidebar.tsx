import { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppLogo } from '@/shared/ui/AppLogo';
import { getUserInited } from '@/entities/User';
import { ThemeSwitcher } from '@/features/Switcher/ThemeSwitcher';
import { LangSwitcher } from '@/features/Switcher/LangSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './RedesignedSidebar.module.scss';

interface SidebarProps {
  className?: string
}

/** Новая боковая панель */
export const RedesignedSidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const inited = useSelector(getUserInited);
    const sidebarItemsList = useSelector(getSidebarItems);

    const hundlerCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <Button
                data-testid="sidebar-wrap-button"
                onClick={hundlerCollapsed}
                className={cls.wrap}
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack
                max
            >
                <AppLogo
                    className={cls.appLogo}
                />
                <VStack
                    className={cls.items}
                    gap={8}
                    Component="nav"
                >

                    {inited && sidebarItemsList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
                </VStack>
            </VStack>
            <HStack
                className={cls.switchers}
                max
                gap={collapsed ? 12 : 32}
                justify="center"
            >
                <ThemeSwitcher />
                <LangSwitcher
                    className={classNames(cls.lang, { [cls.collapsed]: collapsed })}
                    short={collapsed}
                />
            </HStack>
        </aside>
    );
});
