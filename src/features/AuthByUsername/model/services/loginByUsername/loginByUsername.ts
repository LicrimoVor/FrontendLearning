import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string,
    password: string
}

/** Асинхронный редюсер для логина с помощью username и password */
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            extra.navigate?.('/about');
            return response.data;
        } catch (e) {
            return rejectWithValue('Error!');
        }
    },
);
