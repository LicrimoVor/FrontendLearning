import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}

/** Элемент ссылки в Sidebar */
export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();

    const {
        item,
        collapsed,
    } = props;

    return (
        <AppLink
            data-testid={item.path}
            to={item.path}
            inverted
            className={classNames(cls.item)}
        >
            <item.Icon
                className={classNames(cls.icon, {}, [cls.primary])}
            />
            {!collapsed && (
                <span className={classNames(cls.link)}>
                    {t(item.text)}
                </span>
            )}

        </AppLink>
    );
});
