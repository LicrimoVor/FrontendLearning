/* eslint-disable no-unused-vars */
import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    L = 'size_l',
    M = 'size_m',
}

interface TextProps {
    className?: string
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign,
    size?: TextSize,
}

/** Красивенький текст везде и всюду */
export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div
            className={classNames('', {}, [className])}
        >
            {title && (
                <p className={classNames(cls.title, mods)}>{title}</p>
            )}
            {text && (
                <p className={classNames(cls.text, mods)}>{text}</p>
            )}
        </div>
    );
});
