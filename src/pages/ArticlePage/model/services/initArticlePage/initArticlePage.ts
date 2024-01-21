import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';
import { getArticlePageInited } from '../../selectors/articlePage';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlePageList } from '../fetchArticlePageList/fetchArticlePageList';

/** Асинхронный редюсер для инициализации страницы списка статей */
export const initArticlePage = createAsyncThunk<
    void, void, ThunkConfig<string>
>(
    'page/article/initArticlePage',
    async (_, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const _inited = getArticlePageInited(getState());

        if (!_inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlePageList({ page: 1 }));
        }
    },
);
