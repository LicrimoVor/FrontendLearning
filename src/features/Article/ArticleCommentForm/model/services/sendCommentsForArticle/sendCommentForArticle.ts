import { createAsyncThunk } from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { fetchCommentsByAcrticleId } from '../fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';

interface sendCommentForArticleProps {
    text: string,
    articleId?: string,
}

/** Асинхронный редюсер для отправки комментария */
export const sendCommentForArticle = createAsyncThunk<
    Comment, sendCommentForArticleProps, ThunkConfig<string>
>(
    'articleDetail/sendCommentForArticle',
    async (props, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const {
            text,
            articleId,
        } = props;

        const userData = getUserAuthData(getState());

        if (!(userData || text || articleId)) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId,
                text,
                userId: userData!.id,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByAcrticleId(articleId));

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
