import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { ValidateProfileError } from '../../types/validateProfileErrir';
import { updateProfileData } from './updateProfileData';

const data = {
    username: 'licrimovor',
    age: 21,
    country: Country.Russia,
    lastname: 'licrimovor',
    first: 'ivan',
    city: 'SBK',
    currency: Currency.RUB,
};

describe('updateProfileData', () => {
    test('Test success update profile', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Test server-error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('Test client-error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: { ...data, lastname: '' },
                },
            },
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
