import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/route';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { User } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationBtn } from '@/features/NotificationBtn';

import cls from './NabvarDep.module.scss';

interface NavbarProps {
    className?: string,
    authData?: User,
    onOpenModal: () => void,
    isOpenAuth: boolean,
    onCloseModal: () => void,

}

/**
 * @deprecated
 * Верхний бар
 */
export const NavbarDep: FC<NavbarProps> = memo((props: NavbarProps) => {
    const {
        className,
        authData,
        onOpenModal,
        isOpenAuth,
        onCloseModal,
    } = props;

    const { t } = useTranslation();

    if (authData) {
        return (
            <header className={classNames(
                cls.Navbar,
                {},
                [className],
            )}
            >
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
                        inverted
                        className={cls.dropMenu}
                    />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(
            cls.Navbar,
            {},
            [className],
        )}
        >
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
