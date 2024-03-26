import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { getArticleDetailData } from '@/entities/Article';

import { getUserAuthData } from '@/entities/User';

import { getCreateCommentText } from '../../selectors/createComment';
import { createCommentActions } from '../../slice/createCommentSlice';
import { Comment } from '../../types/comment';

/** Асинхронный редюсер для отправки комментария */
export const sendComment = createAsyncThunk<
    Comment, void, ThunkConfig<string>
>(
    'createComment/sendComment',
    async (_, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const text = getCreateCommentText(getState());
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

            dispatch(createCommentActions.setText(''));

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
