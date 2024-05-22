import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleBlockImage } from '../../model/types/article';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
    className?: string,
    block: ArticleBlockImage,
}

/** Блок статьи с картинкой */
export const ArticleBlockImageComponent: FC<ArticleBlockImageComponentProps> = memo((
    props: ArticleBlockImageComponentProps,
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
                    data-testid="ArticleBlockImageComponent"
                >
                    <img src={block.src} className={cls.img} alt={block.title} />
                    {block.title && (
                        <TextDeprecated text={block.title} />
                    )}
                </div>
            )}
            on={(
                <div
                    className={classNames('', {}, [className])}
                    data-testid="ArticleBlockImageComponent"
                >
                    <img src={block.src} className={cls.img} alt={block.title} />
                    {block.title && (
                        <Text text={block.title} />
                    )}
                </div>
            )}
        />

    );
});
