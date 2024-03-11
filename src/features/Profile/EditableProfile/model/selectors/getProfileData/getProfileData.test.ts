import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('Test return data', () => {
        const data = {};
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toBe(data);
    });
    test('Test empty data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
