/* eslint-disable lkx-fsd/path-checker */
import { Decorator } from '@storybook/react';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailReducer } from '@/entities/Article/model/slice/articleSlice';
import { articleCommentReducer } from '@/features/Article/ArticleCommentForm/model/slice/articleCommentsSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { createCommentReducer } from '@/features/CreateComment/model/slice/createCommentSlice';
import { profileReducer } from '@/features/EditableProfile/model/slice/profileSlice';
import { articlePageReducer } from '@/pages/Article/ArticlePage/model/slice/articlePageSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
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
