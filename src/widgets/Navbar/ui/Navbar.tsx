import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import cls from './Nabvar.module.scss';

interface NavbarProps {
    className?: string,
}

/** Верхний бар */
export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const {
        className,
    } = props;

    const [isOpenAuth, setIsOpenAuth] = useState(false);
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsOpenAuth(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsOpenAuth(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack
                    justify="spaceBetween"
                    max
                >
                    <Text
                        theme={TextTheme.INVERTED}
                        className={cls.appName}
                        title={t('PET-project')}
                    />
                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        inverted
                        to={RoutePath.article_create}
                        className={cls.createArticle}
                    >
                        {t('CreateArticle')}
                    </AppLink>
                    <Button
                        onClick={onLogout}
                        theme={ButtonTheme.OUTLINE}
                        inverted
                        className={cls.logoutBtn}
                    >
                        {t('LogOut')}
                    </Button>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                theme={TextTheme.INVERTED}
                className={cls.appName}
                title={t('PET-project')}
            />
            <Button
                onClick={onOpenModal}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                inverted
            >
                {t('LogIn')}
            </Button>
            <LoginModal isOpen={isOpenAuth} onClose={onCloseModal} />
        </header>
    );
});
