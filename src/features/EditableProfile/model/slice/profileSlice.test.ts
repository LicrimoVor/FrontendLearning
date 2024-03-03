import { profileTest } from '@/entities/Profile/testing';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profileSchema';
import { ValidateProfileError } from '../types/validateProfileError';
import { profileActions, profileReducer } from './profileSlice';

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
            data: profileTest,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data: profileTest,
            form: profileTest,
        });
    });

    test('Test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: profileTest,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ ...profileTest, lastname: 'admin' }),
        )).toEqual({
            data: profileTest,
            form: { ...profileTest, lastname: 'admin' },
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
            updateProfileData.fulfilled(profileTest, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            form: profileTest,
            data: profileTest,
            validateError: undefined,
        });
    });
});
