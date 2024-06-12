import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { Coordinate } from '@/shared/types/canvas';
import { ArticleNodeSize, IArticleNode } from '@/entities/Article';

import { ArticleCanvasSchema } from '../types/articleCanvas';
import { fetchArticleCanvas } from '../services/fetchArticleCanvas';

const articleAdapter = createEntityAdapter<IArticleNode>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articleCanvas || articleAdapter.getInitialState(),
);

const shiftX = ArticleNodeSize.width + 40;
const shiftY = ArticleNodeSize.height + 20;

/** Слайс (он же редюсер) для бесконечной области статей */
export const articleCanvasSlice = createSlice({
    name: 'articleCanvas',
    initialState: articleAdapter.getInitialState<ArticleCanvasSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,

        limit: 5,
        page: 1,
        hasMore: true,

        offsent: { x: 0, y: 0 },
        zoom: 1,
        coordLastNode: { x: 0, y: 0 },

        _inited: false,
    }),
    reducers: {
        setCoord: (state, action: PayloadAction<IArticleNode>) => {
            articleAdapter.setOne(state, action.payload);
        },
        setOffset: (state, action: PayloadAction<Coordinate>) => {
            state.offsent = action.payload;
        },
        setZoom: (state, action: PayloadAction<number>) => {
            state.zoom = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleCanvas.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleCanvas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.page += 1;
                state.coordLastNode.y += shiftY;
                state.coordLastNode.x = -shiftX;

                if (action.payload.length < state.limit) {
                    state.hasMore = false;
                }
                const articleNodes = action.payload.map<IArticleNode>((article) => {
                    state.coordLastNode.x += shiftX;
                    return {
                        ...article,
                        coord: { ...state.coordLastNode },
                    };
                });

                articleAdapter.setMany(state, articleNodes);
            })
            .addCase(fetchArticleCanvas.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleCanvasActions } = articleCanvasSlice;
export const { reducer: articleCanvasReducer } = articleCanvasSlice;
