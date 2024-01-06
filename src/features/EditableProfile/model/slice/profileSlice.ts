import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile } from 'entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateError = undefined;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                actions: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = actions.payload;
                state.form = actions.payload;
            })
            .addCase(fetchProfileData.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                actions: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = actions.payload;
                state.form = actions.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, actions) => {
                state.isLoading = false;
                state.validateError = actions.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
