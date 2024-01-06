import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from 'entities/Profile';
import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';

/** Асинхронный редюсер для получения profile */
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error!');
        }
    },
);
