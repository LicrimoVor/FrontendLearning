import { StateSchema } from 'shared/config/reduxConfig/stateShema';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('Test return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('Test empty username', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
