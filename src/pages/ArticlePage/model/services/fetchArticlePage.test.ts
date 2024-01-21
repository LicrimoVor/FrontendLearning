import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlePage } from './fetchArticlePage';

const data = {};

describe('fetchArticlePage', () => {
    test('Test success ...', async () => {
        const thunk = new TestAsyncThunk(fetchArticlePage);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
});
