import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';

import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('Test return state', () => {
        const loginForm = {
            username: 'username',
        };
        const state: DeepPartial<StateSchema> = {
            loginForm,
        };
        expect(getLoginState(state as StateSchema)).toEqual(loginForm);
    });
    test('Test empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
