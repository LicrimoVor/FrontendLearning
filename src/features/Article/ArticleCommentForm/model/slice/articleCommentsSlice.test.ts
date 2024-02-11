import { fetchCommentsByAcrticleId } from '../services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import { ArticleCommentSchema } from '../types/ArticleCommentSchema';
import { articleCommentReducer } from './articleCommentsSlice';

describe('articleCommentSlice', () => {
    test('Test fetchCommentsByAcrticleId pending service', () => {
        const state: DeepPartial<ArticleCommentSchema> = {};
        expect(articleCommentReducer(
            state as ArticleCommentSchema,
            fetchCommentsByAcrticleId.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
});
