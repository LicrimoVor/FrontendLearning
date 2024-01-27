import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';

/** Асинхронный редюсер для получения списка рекомендованных статей */
export const fetchArticlesRecommend = createAsyncThunk<
    Article[], void, ThunkConfig<string>
>(
    'artileDetailPage/fetchArticlesRecommend',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const respone = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4,
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
