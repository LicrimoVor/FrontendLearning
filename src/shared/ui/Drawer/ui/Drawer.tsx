import {
    FC, memo, ReactNode, useCallback, useEffect, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationContext } from '@/shared/lib/components/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string,
    children?: ReactNode,
    onClose?: () => void,
    isOpen?: boolean,
    heightPercent?: number,
}

/** Всплывающее окно снизу для телефоном (шторка) */
const DrawerContent: FC<DrawerProps> = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        heightPercent = 80,
    } = props;

    const height = useMemo(() => (
        Math.round((window.innerHeight + 200) * (heightPercent / 100))
    ), [heightPercent]);

    const { Spring: { useSpring, config, a }, Gesture: { useDrag } } = useAnimationContext();
    const [{ y }, api] = useSpring(() => ({ y: height }));
    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = useDrag(({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel,
    }) => {
        if (my < -200) cancel();

        if (last) {
            if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                close();
            } else {
                openDrawer();
            }
        } else {
            api.start({ y: my, immediate: true });
        }
    }, {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true,
    });

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 200}px)`, y }}
                    {...bind()}
                >
                    {children}
                </a.div>
            </div>
        </Portal>
    );
});

export const DrawerLoading = memo((props: DrawerProps) => {
    const { isLoading } = useAnimationContext();

    if (isLoading) {
        return null;
    }

    return <DrawerContent {...props} />;
});

export const Drawer = memo((props: DrawerProps) => (
    <AnimationProvider>
        <DrawerLoading {...props} />
    </AnimationProvider>
));
