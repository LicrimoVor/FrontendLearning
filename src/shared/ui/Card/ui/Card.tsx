import {
    FC, HTMLAttributes, memo, ReactNode,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface cardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
}

/** Карточка для данных */
export const Card: FC<cardProps> = memo((props: cardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
