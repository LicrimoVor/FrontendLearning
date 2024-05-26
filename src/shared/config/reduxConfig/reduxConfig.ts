/* eslint-disable lkx-fsd/layer-checker */
import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { userReducer } from '@/entities/User';
import { scrollSaveReducer } from '@/features/ScrollSave';

import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './stateShema';

/** Создаем глобал стор */
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        scroll: scrollSaveReducer,
        user: userReducer,
        api: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            // serializableCheck: __PROJECT__ !== 'jest',
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
