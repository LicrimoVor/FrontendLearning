import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLTags } from 'shared/types/ui';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED = 'inverted',
    INVERTED_SECONDARY = 'inverted_secondary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

const TitleTags: Record<TextSize, HTMLTags> = {
    size_s: 'h3',
    size_m: 'h2',
    size_l: 'h1',
};

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

    const TitleTag = TitleTags[size];

    return (
        <div
            className={classNames('', {}, [className])}
        >
            {title && (
                <TitleTag
                    className={classNames(cls.title, mods)}
                >
                    {title}
                </TitleTag>
            )}
            {text && (
                <p className={classNames(cls.text, mods)}>{text}</p>
            )}
        </div>
    );
});
