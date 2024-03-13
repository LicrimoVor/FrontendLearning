import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { getRouteArticleCreate } from '@/shared/const/route';
import { HStack } from '@/shared/ui/Stack';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationBtn } from '@/features/NotificationBtn';

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

    const onCloseModal = useCallback(() => {
        setIsOpenAuth(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsOpenAuth(true);
    }, []);

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
                        to={getRouteArticleCreate()}
                        className={cls.createArticle}
                    >
                        {t('CreateArticle')}
                    </AppLink>
                    <NotificationBtn
                        className={cls.notification}
                    />
                    <AvatarDropdown
                        className={cls.dropMenu}
                    />
                </HStack>
            </header>
        );
    }

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
                <Button
                    onClick={onOpenModal}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    inverted
                >
                    {t('LogIn')}
                </Button>
                <LoginModal isOpen={isOpenAuth} onClose={onCloseModal} />
            </HStack>
        </header>
    );
});
