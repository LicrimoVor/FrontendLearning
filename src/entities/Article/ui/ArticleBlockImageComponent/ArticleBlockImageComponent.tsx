import { ArticleBlockImage } from 'entities/Article/model/types/article';
import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
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
        <div
            className={classNames(cls.ArticleBlockImageComponent, {}, [className])}
        >
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && (
                <Text text={block.title} />
            )}
        </div>
    );
});
