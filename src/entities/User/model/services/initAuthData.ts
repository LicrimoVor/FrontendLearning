import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { getUserById } from '../../api/userApi';
import { User } from '../types/user';

/** Асинхронный редюсер для инициализации начальных данных авторизации */
export const initAuthData = createAsyncThunk<
    User, void, ThunkConfig<string>
>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const {
            dispatch,
            rejectWithValue,
        } = thunkApi;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('error');
        }

        try {
            const response = await dispatch(getUserById(userId));

            if (!response.data) {
                return rejectWithValue('error');
            }

            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                response.data.features?.isAppRedesigned ? 'new' : 'old',
            );

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
