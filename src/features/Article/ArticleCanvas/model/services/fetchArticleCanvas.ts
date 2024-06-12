import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { Article } from '@/entities/Article';
import { getArticleCanvasLimit, getArticleCanvasPage } from '../selectors/articleCanvas';

/** Асинхронный редюсер для получения статей */
export const fetchArticleCanvas = createAsyncThunk<
    Article[], void, ThunkConfig<string>
>(
    'features/article/fetchArticleCanvas',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const limit = getArticleCanvasLimit(getState());
        const page = getArticleCanvasPage(getState());

        try {
            const respone = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });
            if (!respone.data) {
                throw new Error();
            }

            return respone.data;
        } catch {
            return rejectWithValue('error');
        }
    },

);
