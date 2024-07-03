import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { User } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationBtn } from '@/features/NotificationBtn';

import cls from './NabvarRed.module.scss';

interface NavbarProps {
    className?: string,
    authData?: User,
    onOpenModal: () => void,
    isOpenAuth: boolean,
    onCloseModal: () => void,

}

/** Верхний бар */
export const NavbarRed: FC<NavbarProps> = memo((props: NavbarProps) => {
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
                    gap={16}
                >
                    <NotificationBtn />
                    <AvatarDropdown />
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
                gap={16}
            >
                <Button
                    onClick={onOpenModal}
                    variant="outline"
                    className={cls.loginBtn}
                >
                    {t('Sign in')}
                </Button>
                <LoginModal isOpen={isOpenAuth} onClose={onCloseModal} />
            </HStack>
        </header>
    );
});
