import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comments';

describe('getArticleCommentsIsLoading', () => {
    test('Test get success isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailPage: {
                comments: {
                    isLoading: true,
                },
            },
        };

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            state.articleDetailPage?.comments?.isLoading,
        );
    });

    test('Test get empty isLoading', () => {
        expect(getArticleCommentsIsLoading({} as StateSchema)).toEqual(
            undefined,
        );
    });
});

describe('getArticleCommentsError', () => {
    test('Test get success error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailPage: {
                comments: {
                    error: 'error',
                },
            },
        };

        expect(getArticleCommentsError(state as StateSchema)).toEqual(
            state.articleDetailPage?.comments?.error,
        );
    });

    test('Test get empty error', () => {
        expect(getArticleCommentsError({} as StateSchema)).toEqual(
            undefined,
        );
    });
});
