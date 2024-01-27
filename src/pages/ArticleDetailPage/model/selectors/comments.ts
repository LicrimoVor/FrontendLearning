import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getArticleCommentsIsLoading = (
    state: StateSchema,
) => state.articleDetailPage?.comments?.isLoading;
export const getArticleCommentsError = (
    state: StateSchema,
) => state.articleDetailPage?.comments?.error;
