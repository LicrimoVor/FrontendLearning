/* eslint-disable no-unused-vars */
import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string,
    text?: string,
    theme?: TextTheme,
}

/** Красивенький текст везде и всюду */
export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    const mods = {
        [cls[theme]]: true,
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
