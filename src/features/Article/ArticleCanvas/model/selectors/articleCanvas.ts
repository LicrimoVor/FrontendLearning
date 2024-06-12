import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getArticleCanvasIsLoading = (state: StateSchema) => state.articleCanvas?.isLoading;
export const getArticleCanvasError = (state: StateSchema) => state.articleCanvas?.error;
export const getArticleCanvasZoom = (state: StateSchema) => state.articleCanvas?.zoom || 1;
export const getArticleCanvasOffset = (
    state: StateSchema,
) => state.articleCanvas?.offsent || { x: 0, y: 0 };
export const getArticleCanvasCoordLastNode = (
    state: StateSchema,
) => state.articleCanvas?.coordLastNode || { x: 0, y: 0 };

export const getArticleCanvasLimit = (state: StateSchema) => state.articleCanvas?.limit || 10;
export const getArticleCanvasPage = (state: StateSchema) => state.articleCanvas?.page || 1;
export const getArticleCanvasHasMore = (state: StateSchema) => state.articleCanvas?.hasMore;
export const getArticleCanvasInited = (state: StateSchema) => state.articleCanvas?._inited;
