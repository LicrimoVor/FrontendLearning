import { userTest } from '@/entities/User/model/test/data';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { sendComment } from './sendComment';

describe('sendComment', () => {
    test('Test success send', async () => {
        const data = {
            id: '1',
            user: userTest,
            text: 'comment',
        };
        const thunk = new TestAsyncThunk(sendComment, {
            user: {
                authData: userTest,
            },
            createCommentForm: {
                text: data.text,
            },
            articleDetail: {
                data: {
                    id: '1',
                },
            },
        });
        thunk.api.post.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Test not auth send', async () => {
        const thunk = new TestAsyncThunk(sendComment);
        thunk.api.post.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
