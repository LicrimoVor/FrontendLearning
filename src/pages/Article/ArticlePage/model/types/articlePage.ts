import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/order';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,

    // pagination
    page: number,
    limit: number,
    hasMore: boolean,

    // vizual
    view: ArticleView,
    order: SortOrder,
    sort: ArticleSortField,
    search: string,
    type: ArticleType,

    index: number,
    _inited: boolean,
}
