import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { getUserById } from '../../api/userApi';
import { User } from '../types/user';

/** Асинхронный редюсер для ... */
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
            const respone = await dispatch(getUserById(userId)).unwrap();
            if (!respone) {
                return rejectWithValue('error');
            }

            return respone;
        } catch {
            return rejectWithValue('error');
        }
    },
);
