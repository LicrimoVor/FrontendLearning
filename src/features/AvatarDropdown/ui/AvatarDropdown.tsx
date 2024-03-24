import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/route';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';

interface AvatarDropdownProps {
    className?: string,
    inverted?: boolean,
}

/** Аватарка с всплывающем меню */
export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props: AvatarDropdownProps) => {
    const {
        className,
        inverted,
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
            ...(isAdminPanelAvaible ? [{ component: t('Admin'), href: getRouteAdmin() }] : []),
            { component: t('Profile'), href: getRouteProfile(authData.id) },
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
                <Avatar size={40} src={authData.avatar} fallabackInverted={inverted} />
            )}
            className={classNames('', {}, [className])}
            direction="bottom left"
        />
    );
});
