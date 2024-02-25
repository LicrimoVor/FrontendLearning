import { articleTest } from '@/entities/Article/model/test/data';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlePageList } from './fetchArticlePageList';

const data = [
    articleTest,
    articleTest,
];

describe('fetchArticlePageList', () => {
    test('Test success fetch artile list', async () => {
        const thunk = new TestAsyncThunk(fetchArticlePageList, {});
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk({});
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
});
