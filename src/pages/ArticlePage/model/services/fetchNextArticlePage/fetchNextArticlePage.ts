import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';
import {
    getArticlePageHasMore, getArticlePageIsLoading, getArticlePagePage,
} from '../../selectors/articlePage';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlePageList } from '../fetchArticlePageList/fetchArticlePageList';

/** Асинхронный редюсер для получения следующего списка статей */
export const fetchNextArticlePage = createAsyncThunk<
    void, void, ThunkConfig<string>
>(
    'pages/article/fetchNextArticlePage',
    async (_, thunkApi) => {
        const {
            getState,
            dispatch,
        } = thunkApi;

        const hasMore = getArticlePageHasMore(getState());
        const isLoading = getArticlePageIsLoading(getState());
        const page = getArticlePagePage(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlePageList({}));
        }
    },
);
