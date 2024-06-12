/* eslint-disable lkx-fsd/layer-checker */
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleDetailSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { CreateCommentSchema } from '@/entities/Comment';
import { ArticleCommentSchema } from '@/features/Article/ArticleCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/Profile/EditableProfile';
import { ScrollSaveSchema } from '@/features/ScrollSave';
import { ArticleCanvasSchema } from '@/features/Article/ArticleCanvas';
import { ArticlePageSchema } from '@/pages/Article/ArticlePage';

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
