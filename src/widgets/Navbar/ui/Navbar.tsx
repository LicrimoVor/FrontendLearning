import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
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
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.OUTLINE}
                    inverted
                >
                    {t('LogOut')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onOpenModal}
                theme={ButtonTheme.OUTLINE}
                inverted
            >
                {t('LogIn')}
            </Button>
            <LoginModal isOpen={isOpenAuth} onClose={onCloseModal} />
        </header>
    );
});
