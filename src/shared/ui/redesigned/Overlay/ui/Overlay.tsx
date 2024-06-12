import { FC, HTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
}

/**
 * Оверлэй (да тупой транслит)
 */
export const Overlay: FC<OverlayProps> = memo((props: OverlayProps) => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Overlay, {}, [className])}
            {...otherProps}
        />
    );
});
