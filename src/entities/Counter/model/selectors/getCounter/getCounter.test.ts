import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('Test return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
