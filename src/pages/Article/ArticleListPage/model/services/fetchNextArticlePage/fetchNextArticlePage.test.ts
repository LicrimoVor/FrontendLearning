import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk';
import { articleListPageActions } from '../../slice/articleListPageSlice';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('../../slice/articlePageSlice');

describe('fetchNextArticlePage', () => {
    test('Test success get', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articleListPage: {
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
        expect(articleListPageActions.setPage).toBeCalledWith(3);
    });

    test('Test get is loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articleListPage: {
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
        expect(articleListPageActions.setPage).not.toHaveBeenCalled();
    });

    test('Test get not has more', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articleListPage: {
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
        expect(articleListPageActions.setPage).not.toHaveBeenCalled();
    });
});
