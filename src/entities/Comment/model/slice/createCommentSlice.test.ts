import { CreateCommentSchema } from '../types/createComment';
import { createCommentActions, createCommentReducer } from './createCommentSlice';

describe('createCommentSlice', () => {
    test('Test setText', () => {
        const state: DeepPartial<CreateCommentSchema> = {};
        expect(createCommentReducer(
            state as CreateCommentSchema,
            createCommentActions.setText('comment'),
        )).toEqual({ text: 'comment' });
    });
});
