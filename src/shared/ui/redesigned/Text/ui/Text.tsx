import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLTags } from '@/shared/types/tags';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'secondary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

const TitleTags: Record<TextSize, HTMLTags> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

interface TextProps {
    className?: string
    title?: string,
    text?: string,
    variant?: TextVariant,
    align?: TextAlign,
    size?: TextSize,
}

/**
 * Красивенький текст везде и всюду
 */
export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
    } = props;

    const TitleTag = TitleTags[size];

    return (
        <div
            className={classNames(
                cls.Text,
                {},
                [className, cls[variant], cls[align], cls[size]],
            )}
        >
            {title && (
                <TitleTag
                    className={cls.title}
                >
                    {title}
                </TitleTag>
            )}
            {text && (
                <p className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
