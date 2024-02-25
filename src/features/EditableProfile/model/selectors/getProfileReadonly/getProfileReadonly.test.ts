import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('Test return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('Test empty readonly', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
