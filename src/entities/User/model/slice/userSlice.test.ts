import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const data = {};

describe('userSlice', () => {
    test('Test set readonly', () => {
        const state: DeepPartial<UserSchema> = {
            readonly: false,
        };
        expect(userReducer(
            state as UserSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('Test cancel edit', () => {
        const state: DeepPartial<UserSchema> = {
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
            data,
        };
        expect(userReducer(
            state as UserSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });

    test('Test update profile', () => {
        const state: DeepPartial<UserSchema> = {
            data,
        };
        expect(userReducer(
            state as UserSchema,
            profileActions.updateProfile({ ...data, lastname: 'admin' }),
        )).toEqual({
            data,
            form: { ...data, lastname: 'admin' },
        });
    });

    test('Test update profile pending service', () => {
        const state: DeepPartial<UserSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(userReducer(
            state as UserSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('Test update profile fulfilled service', () => {
        const state: DeepPartial<UserSchema> = {
            isLoading: true,
        };
        expect(userReducer(
            state as UserSchema,
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
