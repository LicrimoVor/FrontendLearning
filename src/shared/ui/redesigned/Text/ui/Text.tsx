import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLTags } from '@/shared/types/tags';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'secondary' | 'error' | 'accent';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 's' | 'm' | 'l';
type TextTag = 'p' | 'label';

const TitleTags: Record<TextSize, HTMLTags> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

const TextTags: Record<TextTag, HTMLTags> = {
    p: 'p',
    label: 'label',
};

interface DefaultTextProps {
    className?: string
    title?: string,
    text?: string,
    textTag?: TextTag,
    variant?: TextVariant,
    align?: TextAlign,
    bold?: boolean,
    size?: TextSize,
}

interface ParagraphProps extends DefaultTextProps {
    textTag?: 'p',
}

interface LabelProps extends DefaultTextProps {
    textTag: 'label',
    htmlFor: string,
}

type TextProps = ParagraphProps | LabelProps;

/**
 * Красивенький текст везде и всюду
 */
export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        bold,
        variant = 'primary',
        align = 'left',
        size = 'm',
        textTag = 'p',
        ...otherProps
    } = props;

    const TitleTag = TitleTags[size];
    const TextTag = TextTags[textTag];

    return (
        <div
            className={classNames(
                cls.Text,
                { [cls.bold]: bold },
                [className, cls[variant], cls[align], cls[size]],
            )}
        >
            {title && (
                <TitleTag className={cls.title}>
                    {title}
                </TitleTag>
            )}
            {text && (
                <TextTag className={cls.text} {...otherProps}>
                    {text}
                </TextTag>
            )}
        </div>
    );
});
