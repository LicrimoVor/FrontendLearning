import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlePageList } from '../fetchArticlePageList/fetchArticlePageList';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('../fetchArticlePageList/fetchArticlePageList');

describe('fetchNextArticlePage', () => {
    test('Test success get', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlePageList).toBeCalledWith({ page: 3 });
    });

    test('Test get is loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlePageList).not.toHaveBeenCalled();
    });

    test('Test get not has more', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlePageList).not.toHaveBeenCalled();
    });
});
