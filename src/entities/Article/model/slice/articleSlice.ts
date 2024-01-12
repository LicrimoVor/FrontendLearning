import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleDetailById } from '../services/fetchArticleDetailById/fetchArticleDetailById';
import { Article } from '../types/article';
import { ArticleDetailSchema } from '../types/articleDetailSchema';

const initialState: ArticleDetailSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {
        function: (state, action) => {
            console.log(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetailById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleDetailById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleDetailById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailActions } = articleDetailSlice;
export const { reducer: articleDetailReducer } = articleDetailSlice;
