import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('Test return form', () => {
        const form = {};
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toBe(form);
    });
    test('Test empty form', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
