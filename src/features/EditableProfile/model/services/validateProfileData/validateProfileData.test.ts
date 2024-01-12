import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/validateProfileError';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'licrimovor',
    age: 21,
    country: Country.Russia,
    lastname: 'licrimovor',
    first: 'ivan',
    city: 'SBK',
    currency: Currency.RUB,
};

describe('validateProfileData', () => {
    test('Test success ', async () => {
        const errors = validateProfileData(data);
        expect(errors).toEqual([]);
    });

    test('Test without first and last name', async () => {
        const errors = validateProfileData({ ...data, first: '', lastname: '' });
        expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('Test no data', async () => {
        const errors = validateProfileData();
        expect(errors).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('Test age not number', async () => {
        // @ts-ignore
        const errors = validateProfileData({ ...data, age: 'test' });
        expect(errors).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('Test without country', async () => {
        const errors = validateProfileData({ ...data, country: undefined });
        expect(errors).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('Test all errors', async () => {
        const errors = validateProfileData({ });
        expect(errors).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
