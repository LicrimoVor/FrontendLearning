import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { Comment } from '@/entities/Comment';

/** Асинхронный редюсер для получения комметариев статьи */
export const fetchCommentsByAcrticleId = createAsyncThunk<
    Comment[], string | undefined, ThunkConfig<string>
>(
    'articleDetail/fetchCommentsByAcrticleId',
    async (articleId, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const respone = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
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
