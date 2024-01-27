import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getArticleDetailRecommendIsLoading = (
    state: StateSchema,
) => state.articleDetailPage?.recommend?.isLoading;
export const getArticleDetailRecommendError = (
    state: StateSchema,
) => state.articleDetailPage?.recommend?.error;
