/* eslint-disable lkx-fsd/layer-checker */
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { rtkApi } from '@/shared/api/rtkApi';
import type { ArticleDetailSchema } from '@/entities/Article';
import type { UserSchema } from '@/entities/User';
import type { CreateCommentSchema } from '@/entities/Comment';
import type { ArticleCommentSchema } from '@/features/Article/ArticleCommentForm';
import type { LoginSchema } from '@/features/AuthByUsername';
import type { ProfileSchema } from '@/features/Profile/EditableProfile';
import type { ScrollSaveSchema } from '@/features/ScrollSave';
import type { ArticleCanvasSchema } from '@/features/Article/ArticleCanvas';
import type { ArticleListPageSchema } from '@/pages/Article/ArticleListPage';
import type { OptionsSchema } from '../options';

export interface StateSchema {
    // Синхронные редюсеры
    user: UserSchema,
    scroll: ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    options: OptionsSchema,

    // Асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetail?: ArticleDetailSchema,
    articleComments?: ArticleCommentSchema,
    articleListPage?: ArticleListPageSchema,
    articleCanvas?: ArticleCanvasSchema,
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
