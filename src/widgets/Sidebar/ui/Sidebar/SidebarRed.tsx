import { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowSvg from '@/shared/assets/icons/arrow.svg';
import { getUserInited } from '@/entities/User';
import { ThemeSwitcher } from '@/features/Switcher/ThemeSwitcher';
import { LangSwitcher } from '@/features/Switcher/LangSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItemsRed';
import { SidebarItem } from '../SidebarItem/SidebarItemRed';
import cls from './SidebarRed.module.scss';

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

            <Icon
                Svg={ArrowSvg}
                cliclable
                data-testid="sidebar-wrap-button"
                onClick={hundlerCollapsed}
                className={classNames(cls.collapsedBtn, { [cls.collapsed]: collapsed })}
            />
            <VStack
                max
            >
                <AppLogo
                    className={classNames(
                        cls.appLogo,
                        { [cls.collapsed]: collapsed },
                    )}
                />
                <VStack
                    className={classNames(
                        cls.items,
                        { [cls.collapsed]: collapsed },
                    )}
                    gap={8}
                    Component="nav"
                    max
                >

                    {inited && sidebarItemsList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
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
