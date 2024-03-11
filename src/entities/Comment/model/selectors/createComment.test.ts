import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import { getCreateCommentError, getCreateCommentText } from './createComment';

describe('getCreateCommentText', () => {
    test('Test return text', () => {
        const text = 'comment';
        const state: DeepPartial<StateSchema> = {
            createCommentForm: {
                text,
            },
        };
        expect(getCreateCommentText(state as StateSchema)).toBe(text);
    });

    test('Test empty text', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCreateCommentText(state as StateSchema)).toEqual('');
    });
});

describe('getCreateCommentError', () => {
    test('Test return error', () => {
        const error = 'error';
        const state: DeepPartial<StateSchema> = {
            createCommentForm: {
                error,
            },
        };
        expect(getCreateCommentError(state as StateSchema)).toBe(error);
    });

    test('Test empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCreateCommentError(state as StateSchema)).toEqual(undefined);
    });
});
