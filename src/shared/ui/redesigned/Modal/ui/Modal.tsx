import { FC, ReactNode, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

const ANIMATION_DELAY = 300;

/**
 * Модальное окно
 */
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
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(
                    cls.Modal,
                    mods,
                    [theme, 'app_modal', toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => cls.ModalOld,
                        on: () => cls.ModalNew,
                    })],
                )}
            >
                <Overlay onClick={close} />
                <div className={classNames(cls.content, {}, [className])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};