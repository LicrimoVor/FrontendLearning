import { FC, ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchemaKey } from '@/shared/config/reduxConfig/stateShema';
import { useInitialEffect } from '../../hooks/useInitialEffect/useInitialEffect';
import { ReducerList } from './types';

interface DynamicModuleLoaderProps {
    children: ReactNode,
    reducers: ReducerList,
    removeAfterUnmount?: boolean,
}

/** Динамическое подключение модулей (редюсеров) */
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    // ПЕРЕДАЛЕМ
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useInitialEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    });

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{ children }</>;
};
