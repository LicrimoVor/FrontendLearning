import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from 'entities/Profile';
import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';

/** Асинхронный редюсер для profile */
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (e) {
            return rejectWithValue('Error!');
        }
    },
);
