import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchScrollSave } from './fetchScrollSave';

const data = {

};

describe('fetchScrollSave', () => {
    test('Test success ...', async () => {
        const thunk = new TestAsyncThunk(fetchScrollSave);
        thunk.api.get.mockReturnValue(
            Promise.resolve({ data }),
        );
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
});
