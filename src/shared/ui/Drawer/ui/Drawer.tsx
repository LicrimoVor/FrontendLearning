import {
    FC, memo, ReactNode, useMemo,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string,
    children?: ReactNode,
    onClose?: () => void,
    isOpen?: boolean,
    lazy?: boolean,
}
const ANIMATION_DELAY = 300;

/** Всплывающее окно снизу для телефоном (шторка) */
export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const {
        isClosing,
        isMounted,
        close,
    } = useModal({ onClose, isOpen, animationDelay: ANIMATION_DELAY });
    const { theme } = useTheme();

    const mods: Mods = useMemo(() => ({
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    }), [isOpen, isClosing]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
