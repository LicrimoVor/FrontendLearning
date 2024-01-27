import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Article } from 'entities/Article';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { fetchArticlesRecommend } from '../services/fetchArticlesRecommend/fetchArticlesRecommend';
import { ArticleDetailRecommendSchema } from '../types/ArticleDetailRecommendSchema';

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommend = recommendAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailPage?.recommend || recommendAdapter.getInitialState(),
);

/** Слайс (он же редюсер) для рекомендации статей */
export const articleDetailRecommendSlice = createSlice({
    name: 'articleDetailRecommendSlice',
    initialState: recommendAdapter.getInitialState<ArticleDetailRecommendSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        function: (state, action: PayloadAction<string>) => {

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommend.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticlesRecommend.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesRecommend.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailRecommendActions } = articleDetailRecommendSlice;
export const { reducer: articleDetailRecommendReducer } = articleDetailRecommendSlice;
