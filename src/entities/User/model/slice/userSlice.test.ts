import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('userSlice', () => {
    test('Test set authData', () => {
        const user: User = {
            id: '1',
            username: 'test',
        };
        const state: DeepPartial<UserSchema> = {};
        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData(user),
        )).toEqual({ authData: user });
    });

    test('Test init authData', () => {
        const state: DeepPartial<UserSchema> = {};
        expect(userReducer(
            state as UserSchema,
            userActions.initAuthData(),
        )).toEqual({
            _inited: true,
        });
    });

    test('Test logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {
                id: '1',
                username: 'test',
            },
        };
        expect(userReducer(
            state as UserSchema,
            userActions.logout(),
        )).toEqual({ authData: undefined });
    });
});
