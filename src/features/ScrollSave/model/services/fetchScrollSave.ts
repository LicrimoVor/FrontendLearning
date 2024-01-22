import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';

interface fetchScrollSaveProps {

}

/** Асинхронный редюсер для ... */
export const fetchScrollSave = createAsyncThunk<
    any, fetchScrollSaveProps, ThunkConfig<>
>(
    'name/fetchScrollSave',
    async (authData, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
        } = thunkApi;
    },
);
