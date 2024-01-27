import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createReduxStore } from 'shared/config/reduxConfig/reduxConfig';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

/** Provider store для редакса */
export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
