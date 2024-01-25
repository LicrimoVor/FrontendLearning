import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlePageList } from './fetchArticlePageList';

const data = {};

describe('fetchArticlePageList', () => {
    test('Test success ...', async () => {
        const thunk = new TestAsyncThunk(fetchArticlePageList);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
});
