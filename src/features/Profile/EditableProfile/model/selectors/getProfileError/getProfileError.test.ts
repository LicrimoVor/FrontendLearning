import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('Test return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('Test empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
