import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
    children?: ReactNode
}

/** Provider сторисов от редакса */
export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
    } = props;

    return (
        <Provider store={}>
            {children}
        </Provider>
    );
};
