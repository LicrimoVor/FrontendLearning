import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outline' | 'light';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
    variant?: CardVariant,
    withoutPadding?: boolean
    max?: boolean
}

/**
 * Карточка для данных
 */
export const Card: FC<CardProps> = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        withoutPadding,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(
                cls.Card,
                { [cls.withoutPadding]: withoutPadding, [cls.max]: max },
                [className, cls[variant]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
