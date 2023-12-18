import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Nabvar.module.scss';

interface NavbarProps {
  className?: string
}

/** Верхний бар */
export const Navbar: FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    const [isOpenAuth, setIsOpenAuth] = useState(false);

    const { t } = useTranslation();
    const isOpenAuthHundler = useCallback(() => {
        setIsOpenAuth((prev) => !prev);
    }, [setIsOpenAuth]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={isOpenAuthHundler}
                theme={ButtonTheme.OUTLINE}
                inverted
            >
                {t('LogIn')}
            </Button>
            <Modal
                isOpen={isOpenAuth}
                onClose={isOpenAuthHundler}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque provident deleniti dignissimos iste illum deserunt! Accusantium enim nobis tempora, dolorem excepturi soluta dolorum in facere laudantium, ab veritatis cupiditate. Tempore.
            </Modal>
        </div>
    );
};
