import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code as CodeViewDeprecated } from '@/shared/ui/deprecated/Code';
import { CodeView as CodeViewRedesigned } from '@/shared/ui/redesigned/CodeView';
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
                off={<CodeViewDeprecated text={block.code} />}
                on={<CodeViewRedesigned text={block.code} />}
            />
        </div>
    );
});
