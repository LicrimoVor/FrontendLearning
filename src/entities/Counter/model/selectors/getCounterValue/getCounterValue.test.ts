import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
    test('Test return counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
