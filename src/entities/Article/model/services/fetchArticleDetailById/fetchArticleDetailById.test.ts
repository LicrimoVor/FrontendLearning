import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { fetchArticleDetailById } from './fetchArticleDetailById';

const data = {
    id: 1,
    title: 'JS news',
    subtitle: 'ЧТО то новое в JS за 23 год',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    views: 1241,
    createdAt: '25.12.2023',
    type: [],
    blocks: [],
};

describe('fetchArticleDetailById', () => {
    test('Test success get article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailById);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Test error get article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailById);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
