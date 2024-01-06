import { Profile } from 'entities/Profile';
import { ValidateProfileError } from './validateProfileErrir';

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateError?: ValidateProfileError[],
}
