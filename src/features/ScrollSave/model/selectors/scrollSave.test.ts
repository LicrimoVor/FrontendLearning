import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { getScrollSaveScroll, getScrollSaveScrollByPath } from './scrollSave';

describe('getScrollSaveScroll', () => {
    test('Test return scroll', () => {
        const scroll = {};
        const state: DeepPartial<StateSchema> = {
            scroll: {
                scroll,
            },
        };
        expect(getScrollSaveScroll(state as StateSchema)).toBe(scroll);
    });
});

describe('getScrollSaveScrollByPath', () => {
    test('Test return scroll by success path', () => {
        const scroll = {
            test_path: 5,
        };
        const state: DeepPartial<StateSchema> = {
            scroll: {
                scroll,
            },
        };
        expect(getScrollSaveScrollByPath(state as StateSchema, 'test_path')).toEqual(5);
    });

    test('Test return scroll by not have path', () => {
        const scroll = {
            test_path: 5,
        };
        const state: DeepPartial<StateSchema> = {
            scroll: {
                scroll,
            },
        };
        expect(getScrollSaveScrollByPath(state as StateSchema, 'not_have')).toEqual(0);
    });
});
