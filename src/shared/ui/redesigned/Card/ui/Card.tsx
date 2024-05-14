import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outline' | 'light';
type CardBorder = 'round' | 'normal';
type CardPadding = 0 | 4 | 8 | 12 | 16 | 20;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
    variant?: CardVariant,
    max?: boolean,
    border?: CardBorder,
    padding?: CardPadding,
}

const CardMapPadding: Record<CardPadding, string> = {
    0: cls.paddding_0,
    4: cls.paddding_4,
    8: cls.paddding_8,
    12: cls.paddding_12,
    16: cls.paddding_16,
    20: cls.paddding_20,
};

/**
 * Карточка для данных
 */
export const Card: FC<CardProps> = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        border = 'normal',
        max,
        padding = 20,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(
                cls.Card,
                { [cls.max]: max },
                [className, cls[variant], cls[border], CardMapPadding[padding]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
