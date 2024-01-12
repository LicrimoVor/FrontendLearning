import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getArticleDetailData = (state: StateSchema) => state.articleDetail?.data;
export const getArticleDetailError = (state: StateSchema) => state.articleDetail?.error;
export const getArticleDetailIsLoadnig = (state: StateSchema) => state.articleDetail?.isLoading;
