import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { ArticleBlockCode } from '../../model/types/article';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
    className?: string,
    block: ArticleBlockCode,
}

/** Блок статьи с кодом */
export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = memo((
    props: ArticleBlockCodeComponentProps,
) => {
    const {
        className,
        block,
    } = props;

    return (
        <div
            className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}
        >
            <Code text={block.code} />
        </div>
    );
});
