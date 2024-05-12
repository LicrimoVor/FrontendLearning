import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/route';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
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
            <header className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => cls.Navbar,
                    on: () => cls.NavbarRedesigned,
                }),
                {},
                [className],
            )}
            >
                <HStack
                    justify="spaceBetween"
                    max
                >

                    <ToggleFeatures
                        feature="isAppRedesigned"
                        off={(
                            <>
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
                            </>

                        )}
                        on={null}
                    />

                    <NotificationBtn
                        className={cls.notification}
                    />
                    <AvatarDropdown
                        inverted
                        className={cls.dropMenu}
                    />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(
            toggleFeatures({
                name: 'isAppRedesigned',
                off: () => cls.Navbar,
                on: () => cls.NavbarRedesigned,
            }),
            {},
            [className],
        )}
        >
            <HStack
                justify="spaceBetween"
                max
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={(
                        <Text
                            theme={TextTheme.INVERTED}
                            className={cls.appName}
                            title={t('PET-project')}
                        />

                    )}
                    on={null}
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
