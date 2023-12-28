import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';

import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
    test('Test return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });
    test('Test empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
