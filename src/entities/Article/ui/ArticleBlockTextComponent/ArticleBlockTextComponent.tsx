import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleBlockText } from '../../model/types/article';
import cls from './ArticleBlockTextComponent.module.scss';

interface ArticleBlockTextComponentProps {
    className?: string,
    block: ArticleBlockText,
}

/** Блок статьи с текстом */
export const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = memo((
    props: ArticleBlockTextComponentProps,
) => {
    const {
        className,
        block,
    } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <div
                    className={classNames('', {}, [className])}
                    data-testid="ArticleBlockTextComponent"
                >
                    {block.title && (
                        <TextDeprecated
                            title={block.title}
                            className={cls.title}
                        />
                    )}
                    {block.paragraphs.map((paragraph: string) => (
                        <TextDeprecated
                            text={paragraph}
                            key={paragraph}
                            className={cls.paragraph}
                        />
                    ))}
                </div>
            )}
            on={(
                <div
                    className={classNames('', {}, [className])}
                    data-testid="ArticleBlockTextComponent"
                >
                    {block.title && (
                        <Text
                            title={block.title}
                            className={cls.title}
                        />
                    )}
                    {block.paragraphs.map((paragraph: string) => (
                        <Text
                            text={paragraph}
                            key={paragraph}
                            className={cls.paragraph}
                        />
                    ))}
                </div>
            )}
        />
    );
});
