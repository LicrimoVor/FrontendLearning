import { StateSchema } from 'shared/config/reduxConfig/stateShema';

import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('Test return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('Test empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
