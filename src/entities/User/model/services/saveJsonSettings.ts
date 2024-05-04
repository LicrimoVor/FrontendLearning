import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { JsonSettings } from '../types/settings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettings } from '../../api/userApi';

/** Асинхронный редюсер для сохранения json settings */
export const saveJsonSettings = createAsyncThunk<
    JsonSettings, JsonSettings, ThunkConfig<string>
>(
    'user/saveJsonSettings',
    async (newJsonSettings, thunkApi) => {
        const {
            dispatch,
            rejectWithValue,
            getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const currentSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('error');
        }

        try {
            const response = await dispatch(setJsonSettings({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            })).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('error');
            }

            return response.jsonSettings;
        } catch {
            return rejectWithValue('error');
        }
    },
);
