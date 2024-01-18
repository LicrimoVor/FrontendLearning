import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticleDetailData } from 'entities/Article/model/selectors/articleDetails';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';
import { fetchCommentsByAcrticleId } from '../fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';

/** Асинхронный редюсер для отправки комментария */
export const sendCommentForArticle = createAsyncThunk<
    Comment, string, ThunkConfig<string>
>(
    'articleDetail/sendCommentForArticle',
    async (text, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailData(getState());

        if (!(userData || text || article)) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article!.id,
                text,
                userId: userData!.id,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByAcrticleId(article?.id));

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
