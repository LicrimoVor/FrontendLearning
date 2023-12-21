import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'shared/config/reduxConfig/reduxConfig';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: StateSchema
}

/** Provider сторисов от редакса */
export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
