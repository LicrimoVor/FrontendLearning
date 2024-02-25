import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { fetchCommentsByAcrticleId } from '../services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import { ArticleCommentSchema } from '../types/ArticleCommentSchema';

const commentsAdapter = createEntityAdapter({
    selectId: (book: Comment) => book.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments || commentsAdapter.getInitialState(),
);

const articleCommentSlice = createSlice({
    name: 'article/articleCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
            1: {
                id: '1',
                text: 'comment 1',
                user: { id: '1', username: '1' },
            },
            2: {
                id: '2',
                text: 'comment 2',
                user: { id: '2', username: '2' },
            },
        },
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByAcrticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByAcrticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByAcrticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleCommentReducer } = articleCommentSlice;
export const { actions: articleCommentActions } = articleCommentSlice;
