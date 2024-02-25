import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { Article } from '../../types/article';

/** Асинхронный редюсер для получения полной статьи */
export const fetchArticleDetailById = createAsyncThunk<
    Article, string, ThunkConfig<string>
>(
    'articleDetail/fetchArticleDetailById',
    async (articleId, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error!');
        }
    },
);
