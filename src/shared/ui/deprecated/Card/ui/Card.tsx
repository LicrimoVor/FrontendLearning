import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
    theme?: CardTheme,
}

/**
 * @deprecated
 * Карточка для данных
 */
const Card: FC<CardProps> = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

export default Card;
export type CardType = typeof Card;
