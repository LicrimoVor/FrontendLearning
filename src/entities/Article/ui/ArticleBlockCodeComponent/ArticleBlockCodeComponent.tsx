import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code as CodeRedesigned } from '@/shared/ui/redesigned/Code';
import { ToggleFeatures } from '@/shared/lib/features';

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
            data-testid="ArticleBlockCodeComponent"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<CodeDeprecated text={block.code} />}
                on={<CodeRedesigned text={block.code} />}
            />
        </div>
    );
});
