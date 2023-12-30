import React, {
    FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: ()=>void,
    lazy?: boolean,
    element?: HTMLElement,
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
        element,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.closing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        // Хуй знает, как это работает, но это работает
        // по факту просто костылина жесткая
        // # анимашка появления модального окна
        timerRef.current = setTimeout(() => {
            setIsOpening(true);
        }, 0);
        return () => setIsMounted(false);
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }
    // КОСТЫЛЬ!
    return (
        <Portal element={element}>
            <div
                className={classNames(cls.Modal, mods, [className])}
            >
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
