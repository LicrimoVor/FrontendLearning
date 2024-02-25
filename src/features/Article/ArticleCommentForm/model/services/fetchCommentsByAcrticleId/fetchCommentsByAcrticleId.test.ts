import { Comment } from '@/entities/Comment';
import { commentTest } from '@/entities/Comment/model/test/data';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchCommentsByAcrticleId } from './fetchCommentsByAcrticleId';

describe('fetchCommentsByAcrticleId', () => {
    test('Test success get comments', async () => {
        const data: Comment[] = [
            commentTest,
            commentTest,
            commentTest,
        ];
        const thunk = new TestAsyncThunk(fetchCommentsByAcrticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Test error get comments', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByAcrticleId);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
