import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateCommentSchema } from '../types/createComment';

const initialState: CreateCommentSchema = {
    text: '',
};

/** Слайс (он же редюсер) для создания комментария */
const createCommentSlice = createSlice({
    name: 'createComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: createCommentActions } = createCommentSlice;
export const { reducer: createCommentReducer } = createCommentSlice;
