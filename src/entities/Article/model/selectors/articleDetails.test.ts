import { StateSchema } from 'shared/config/reduxConfig/stateShema';

import { getArticleDetailData, getArticleDetailError, getArticleDetailIsLoadnig } from './articleDetails';

describe('getArticleDetailData', () => {
    test('Test return data', () => {
        const data = {};
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                data,
            },
        };
        expect(getArticleDetailData(state as StateSchema)).toBe(data);
    });
    test('Test empty data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailError', () => {
    test('Test return error', () => {
        const error = 'error';
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                error,
            },
        };
        expect(getArticleDetailError(state as StateSchema)).toEqual(error);
    });
    test('Test empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailIsLoadnig', () => {
    test('Test return isLoading', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            articleDetail: {
                isLoading,
            },
        };
        expect(getArticleDetailIsLoadnig(state as StateSchema)).toEqual(isLoading);
    });
    test('Test empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailIsLoadnig(state as StateSchema)).toEqual(undefined);
    });
});
