import {
    FC, memo, useEffect, useState,
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
    className?: string
}

/** Элемент ссылки в Sidebar */
export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed,
        className,
    } = props;

    const [endCollapsed, setEndCollapsed] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (collapsed) {
            const timmer = setTimeout(() => {
                setEndCollapsed(true);
            }, 300);

            return () => (clearTimeout(timmer));
        }
        setEndCollapsed(false);
        return undefined;
    }, [collapsed]);

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            data-testid={item.path}
            to={item.path}
            className={classNames(cls.item, {}, [className])}
            activeClassname={cls.active}
        >
            <Icon
                Svg={item.Icon}
                size={24}
            />
            {
                endCollapsed
                    ? null
                    : (
                        <span className={classNames(
                            cls.link,
                            { [cls.collapsed]: collapsed },
                        )}
                        >
                            {t(item.text)}
                        </span>
                    )
            }

        </AppLink>
    );
});
