import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Nabvar.module.scss';

interface NavbarProps {
  className?: string,
}

/** Верхний бар */
export const Navbar: FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    const [isOpenAuth, setIsOpenAuth] = useState(false);

    const { t } = useTranslation();
    const onCloseModal = useCallback(() => {
        setIsOpenAuth(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsOpenAuth(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onOpenModal}
                theme={ButtonTheme.OUTLINE}
                inverted
            >
                {t('LogIn')}
            </Button>
            <LoginModal isOpen={isOpenAuth} onClose={onCloseModal} />
        </div>
    );
};
