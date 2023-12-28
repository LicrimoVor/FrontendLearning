import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice', () => {
    test('Test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('456'),
        )).toEqual({ username: '456' });
    });

    test('Test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('456'),
        )).toEqual({ password: '456' });
    });
});
