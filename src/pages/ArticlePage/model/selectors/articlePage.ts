import { ArticleView } from 'entities/Article';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (
    state: StateSchema,
) => state.articlePage?.view || ArticleView.SMALL;
