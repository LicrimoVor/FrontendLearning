import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { ValidateProfileError } from '../../types/validateProfileErrir';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('Test return validateError', () => {
        const validateError: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toBe(validateError);
    });
    test('Test empty validateError', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
