import {
    FC, ReactNode, useMemo,
} from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

const ANIMATION_DELAY = 300;

/** Модальное окно */
export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
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
            <div
                className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
