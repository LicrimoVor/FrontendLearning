import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export const getArticlePageIsLoading = (state: StateSchema) => state.articleListPage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articleListPage?.error;
export const getArticlePageView = (
    state: StateSchema,
) => state.articleListPage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state: StateSchema) => state.articleListPage?.limit || 10;
export const getArticlePagePage = (state: StateSchema) => state.articleListPage?.page || 1;
export const getArticlePageHasMore = (state: StateSchema) => state.articleListPage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articleListPage?._inited;
export const getArticlePageOrder = (state: StateSchema) => state.articleListPage?.order || 'asc';
export const getArticlePageSort = (
    state: StateSchema,
) => state.articleListPage?.sort || ArticleSortField.CREATED;
export const getArticlePageSearch = (state: StateSchema) => state.articleListPage?.search ?? '';
export const getArticlePageType = (
    state: StateSchema,
) => state.articleListPage?.type || ArticleType.All;
export const getArticlePageIndex = (state: StateSchema) => state.articleListPage?.index;
