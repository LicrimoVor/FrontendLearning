import { StateSchema } from 'shared/config/reduxConfig/stateShema';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('Test return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('Test empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
