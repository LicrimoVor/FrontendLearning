import {
    FC, memo, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { classNames } from '@/shared/lib/classNames';
import { getUserAuthData } from '@/entities/User';

import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItemRed.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
    animate?: boolean,
    className?: string
}

/** Элемент ссылки в Sidebar */
export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed,
        animate = true,
        className,
    } = props;

    const [endCollapsed, setEndCollapsed] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setEndCollapsed(false);
        if (!animate) {
            setEndCollapsed(collapsed);
        } else if (collapsed) {
            const timmer = setTimeout(() => {
                setEndCollapsed(true);
            }, 300);

            return () => (clearTimeout(timmer));
        }

        return undefined;
    }, [collapsed, animate]);

    const isAuth = useSelector(getUserAuthData);
    const mods = useMemo(() => ({
        [cls.collapsed]: collapsed,
        [cls.animate]: animate,
    }), [collapsed, animate]);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            data-testid={item.path}
            to={item.path}
            className={classNames(cls.item, {}, [className])}
            activeClassname={cls.active}
            draggable={false}
            ariaLabel={item.text}
        >
            <Icon
                Svg={item.Icon}
                size={24}
            />
            {!endCollapsed && (
                <span className={classNames(cls.link, mods)}>
                    {t(item.text)}
                </span>
            )}
        </AppLink>
    );
});
