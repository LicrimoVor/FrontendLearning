import {
    FC, memo, MutableRefObject, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string,
    children?: ReactNode,
    onClose?: () => void,
    isOpen?: boolean,
}
const ANIMATION_DELAY = 300;

/** Всплывающее окно снизу для телефоном (шторка) */
export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const mods: Mods = useMemo(() => ({
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    }), [isOpen, isClosing]);

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
