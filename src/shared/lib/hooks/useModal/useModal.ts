import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void,
    isOpen?: boolean,
    animationDelay: number,
}

export const useModal = (props: UseModalProps) => {
    const {
        onClose,
        isOpen,
        animationDelay,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            setIsMounted(false);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isMounted,
        isClosing,
        close,
    };
};
