import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'licrimovor',
    age: 21,
    country: Country.Russia,
    lastname: 'licrimovor',
    first: 'ivan',
    city: 'SBK',
    currency: Currency.RUB,
};

describe('fetchProfileData', () => {
    test('Test success get profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Test error get profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
