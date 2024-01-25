import { ScrollSave, ScrollSaveSchema } from '../types/scrollSave';
import { scrollSaveActions, scrollSaveReducer } from './scrollSaveSlice';

describe('scrollSaveSlice', () => {
    test('Test ...', () => {
        const scrollSave: ScrollSave = {
        };
        const state: DeepPartial<ScrollSaveSchema> = {};
        expect(scrollSaveReducer(
            state as ScrollSaveSchema,
            scrollSaveActions.setScrollPosition({ path: '', position: 12 }),
        )).toEqual({});
    });
});
