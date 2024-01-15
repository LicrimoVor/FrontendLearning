import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getArticleCommentsIsLoading = (
    state: StateSchema,
) => state.articleDetailComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailComments?.error;
