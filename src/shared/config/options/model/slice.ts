import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_OPTIONS } from '@/shared/const/localStorage';

import { OptionsSchema } from './types';

const initialState: OptionsSchema = {
    isOnline: true,
    sidebarCollapsed: false,
};

/** Слайс (он же редюсер) для настроек страницы */
export const optionsSlice = createSlice({
    name: 'optionsSlice',
    initialState,
    reducers: {
        setOnline: (state, action: PayloadAction<boolean>) => {
            state.isOnline = action.payload;
        },
        setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
            localStorage.setItem(LOCAL_STORAGE_OPTIONS, JSON.stringify(state));
        },
        initData: (state) => {
            const localData = localStorage.getItem(LOCAL_STORAGE_OPTIONS);
            if (localData) {
                const data: OptionsSchema = JSON.parse(localData);
                state.sidebarCollapsed = data.sidebarCollapsed;
            }
        },
    },
});

export const { actions: optionsActions } = optionsSlice;
export const { reducer: optionsReducer } = optionsSlice;
