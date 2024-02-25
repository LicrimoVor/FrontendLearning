import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('Test return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test('Test empty password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
