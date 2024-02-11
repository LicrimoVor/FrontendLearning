/* eslint-disable no-unused-vars */
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { ArticleCommentSchema } from 'features/Article/ArticleCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { CreateCommentSchema } from 'features/CreateComment';
import { ProfileSchema } from 'features/EditableProfile';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { ArticlePageSchema } from 'pages/Article/ArticlePage';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
    // Синхронные редюсеры
    user: UserSchema,
    scroll: ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetail?: ArticleDetailSchema,
    articleComments?: ArticleCommentSchema,
    articlePage?: ArticlePageSchema,
    createCommentForm?: CreateCommentSchema,
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: ()=> ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) =>CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
    // true - вмонтирован, false - не вмонтирован
    getMountedReducers: () => MountedReducers,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager,
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}
