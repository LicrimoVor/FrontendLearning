import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from 'entities/Profile';
import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

/** Асинхронный редюсер для обновления profile */
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            return rejectWithValue('Error!');
        }
    },
);
