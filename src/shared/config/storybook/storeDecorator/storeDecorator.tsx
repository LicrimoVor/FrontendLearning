import { Decorator } from '@storybook/react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailReducer } from 'entities/Article/model/slice/articleSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { createCommentReducer } from 'features/CreateComment/model/slice/createCommentSlice';
import { profileReducer } from 'features/EditableProfile/model/slice/profileSlice';
import { articleDetailPageReducer } from 'pages/ArticleDetailPage';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetail: articleDetailReducer,
    createCommentForm: createCommentReducer,
    articleDetailPage: articleDetailPageReducer,
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
