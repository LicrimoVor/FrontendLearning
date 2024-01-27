import { ScrollSave, ScrollSaveSchema } from '../types/scrollSave';
import { scrollSaveActions, scrollSaveReducer } from './scrollSaveSlice';

describe('scrollSaveSlice', () => {
    test('Test action setScrollPosition', () => {
        const scrollSave: ScrollSave = {
            test: 12,
        };
        const state: DeepPartial<ScrollSaveSchema> = {
            scroll: scrollSave,
        };
        expect(scrollSaveReducer(
            state as ScrollSaveSchema,
            scrollSaveActions.setScrollPosition({ path: 'test_2', position: 56 }),
        )).toEqual({
            scroll: {
                test: 12,
                test_2: 56,
            },
        });
    });
});
