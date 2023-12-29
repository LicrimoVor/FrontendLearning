import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from 'shared/config/reduxConfig/stateShema';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => (
    AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>
)

/** Класс для тестирования работы со стейтом */
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
