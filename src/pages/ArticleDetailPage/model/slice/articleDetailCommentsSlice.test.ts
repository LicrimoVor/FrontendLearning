import { commentTest } from 'entities/Comment/model/test/data';
import { fetchCommentsByAcrticleId } from '../services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import { ArticleDetailCommentsSchema } from '../types/ArticleDetailCommentsSchema';
import { articleDetailCommentsReducer } from './articleDetailCommentsSlice';

describe('articleDetailCommentsSlice', () => {
    test('Test fetchCommentsByAcrticleId pending service', () => {
        const state: DeepPartial<ArticleDetailCommentsSchema> = {};
        expect(articleDetailCommentsReducer(
            state as ArticleDetailCommentsSchema,
            fetchCommentsByAcrticleId.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
});
