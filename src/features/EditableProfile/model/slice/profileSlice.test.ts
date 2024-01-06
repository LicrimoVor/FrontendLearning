import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profileSchema';
import { ValidateProfileError } from '../types/validateProfileErrir';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'licrimovor',
    age: 21,
    country: Country.Russia,
    lastname: 'licrimovor',
    first: 'ivan',
    city: 'SBK',
    currency: Currency.RUB,
};

describe('profileSlice', () => {
    test('Test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('Test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
            data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });

    test('Test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ ...data, lastname: 'admin' }),
        )).toEqual({
            data,
            form: { ...data, lastname: 'admin' },
        });
    });

    test('Test update profile pending service', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('Test update profile fulfilled service', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            form: data,
            data,
            validateError: undefined,
        });
    });
});
