import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Article, ArticleView } from 'entities/Article';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlePage } from '../services/fetchArticlePage';
import { ArticlePageSchema } from '../types/articlePage';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState(),
);

/** Слайс (он же редюсер) для получения списка статей */
export const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articleAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlePage.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlePage.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlePage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
