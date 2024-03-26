import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { getArticleCommentIsLoading, getArticleCommentError } from './comments';

describe('getArticleCommentIsLoading', () => {
    test('Test get success isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                isLoading: true,
            },
        };

        expect(getArticleCommentIsLoading(state as StateSchema)).toEqual(
            state.articleComments?.isLoading,
        );
    });

    test('Test get empty isLoading', () => {
        expect(getArticleCommentIsLoading({} as StateSchema)).toEqual(
            undefined,
        );
    });
});

describe('getArticleCommentError', () => {
    test('Test get success error', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                error: 'error',
            },
        };

        expect(getArticleCommentError(state as StateSchema)).toEqual(
            state.articleComments?.error,
        );
    });

    test('Test get empty error', () => {
        expect(getArticleCommentError({} as StateSchema)).toEqual(
            undefined,
        );
    });
});
