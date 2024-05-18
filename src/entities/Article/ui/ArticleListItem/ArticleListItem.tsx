import { FC, HTMLAttributeAnchorTarget, memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/article';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

export interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    onClickBtn?: () => void,
}

/** Отображение самой статьи на главном экране */
export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        off={<ArticleListItemDeprecated {...props} />}
        on={<ArticleListItemRedesigned {...props} />}
    />
));
