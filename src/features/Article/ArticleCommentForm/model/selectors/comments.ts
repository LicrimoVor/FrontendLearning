import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getArticleCommentIsLoading = (
    state: StateSchema,
) => state.articleComments?.isLoading;

export const getArticleCommentError = (
    state: StateSchema,
) => state.articleComments?.error;
