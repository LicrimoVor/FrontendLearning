import {
    FC, memo, useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { ToggleFeatures } from '@/shared/lib/features';
import { getUserAuthData } from '@/entities/User';

import { NavbarDep } from './NavbarDep';
import { NavbarRed } from './NavbarRed';

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

    const onCloseModal = useCallback(() => {
        setIsOpenAuth(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsOpenAuth(true);
    }, []);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <NavbarDep
                    className={className}
                    isOpenAuth={isOpenAuth}
                    onCloseModal={onCloseModal}
                    onOpenModal={onOpenModal}
                    authData={authData}
                />
            )}
            on={(
                <NavbarRed
                    className={className}
                    isOpenAuth={isOpenAuth}
                    onCloseModal={onCloseModal}
                    onOpenModal={onOpenModal}
                    authData={authData}
                />
            )}
        />
    );
});
