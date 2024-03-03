import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
    className?: string,
}

/** Аватарка с всплывающем меню */
export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props: AvatarDropdownProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const dropdownData = useMemo(() => {
        if (authData === undefined) {
            return null;
        }

        const isAdminPanelAvaible = isAdmin || isManager;

        return [
            ...(isAdminPanelAvaible ? [{ component: t('Admin'), href: RoutePath.admin_panel }] : []),
            { component: t('Profile'), href: RoutePath.profile + authData.id },
            { component: t('LogOut'), onClick: onLogout },
        ];
    }, [onLogout, authData, t, isAdmin, isManager]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            data={dropdownData!}
            label={(
                <Avatar size={40} src={authData.avatar} />
            )}
            className={classNames('', {}, [className])}
            direction="bottom left"
        />
    );
});
