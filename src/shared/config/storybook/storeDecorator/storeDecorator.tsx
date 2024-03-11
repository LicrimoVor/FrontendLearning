/* eslint-disable lkx-fsd/public-import */
/* eslint-disable lkx-fsd/layer-checker */
import { Decorator } from '@storybook/react';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { createCommentReducer } from '@/entities/Comment/testing';
import { articleDetailReducer } from '@/entities/Article/testing';
import { articleCommentReducer } from '@/features/Article/ArticleCommentForm/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/Profile/EditableProfile/testing';
import { articlePageReducer } from '@/pages/Article/ArticlePage/testing';

import { StateSchema } from '../../reduxConfig/stateShema';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articlePage: articlePageReducer,
    articleDetail: articleDetailReducer,
    articleComments: articleCommentReducer,
    createCommentForm: createCommentReducer,
};

/** Декоратор глобал стора для сторисов */
export const storeDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
): Decorator => (Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
