import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';

/** Асинхронный редюсер для ... */
export const fetchArticlePage = createAsyncThunk<
    Article[], void, ThunkConfig<string>
>(
    'pages/fetchArticlePage',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const respone = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
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
