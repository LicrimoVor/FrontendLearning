import {
    FC, memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowSvg from '@/shared/assets/icons/arrow.svg';
import { getSidebarCollapsed, optionsActions } from '@/shared/config/options';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
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

    const collapsed = useSelector(getSidebarCollapsed);
    const [initAnimate, setInitAnimate] = useState(false);
    const dispatch = useAppDispatch();
    const initUser = useSelector(getUserInited);
    const sidebarItemsList = useSelector(getSidebarItems);

    const setCollapsed = useCallback(() => {
        dispatch(optionsActions.setSidebarCollapsed(!collapsed));
        setInitAnimate(true);
    }, [dispatch, collapsed]);

    const mods = useMemo(() => ({
        [cls.collapsed]: collapsed,
        [cls.notInit]: !initAnimate,
    }), [collapsed, initAnimate]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, mods, [className])}
        >
            <Icon
                aria-labelledby="home"
                Svg={ArrowSvg}
                clickable
                data-testid="sidebar-wrap-button"
                onClick={setCollapsed}
                className={classNames(cls.collapsedBtn, mods)}
            />
            <VStack
                max
            >
                <AppLogo
                    className={classNames(
                        cls.appLogo,
                        mods,
                    )}
                />
                <VStack
                    className={classNames(
                        cls.items,
                        mods,
                    )}
                    gap={8}
                    Component="nav"
                    max
                >
                    {initUser && sidebarItemsList.map((item) => (
                        <SidebarItem
                            animate={initAnimate}
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                            className={classNames(cls.item, mods)}
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
                    className={classNames(cls.lang, mods)}
                    short={collapsed}
                />
            </HStack>
        </aside>
    );
});
