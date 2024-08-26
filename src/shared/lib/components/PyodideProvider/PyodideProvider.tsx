import {
    ReactElement,
    createContext,
    memo,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { loadPyodide, PyodideInterface } from 'pyodide';

interface PyodideSchema {
    library?: PyodideInterface,
    isLoading?: boolean
}

const PyodideContext = createContext<PyodideSchema>({});

/** Подгрузка Pyodide библиотеки */
export const PyodideProvider = memo(({ children }: {children: ReactElement}) => {
    const [isLoading, setIsloading] = useState(true);
    const library = useRef<PyodideInterface>();

    useEffect(() => {
        loadPyodide({ indexURL: `${window.location.origin}/pyodide` }).then((lib) => {
            library.current = lib;
            setIsloading(false);
        });
    }, []);

    const initialData = useMemo(() => ({
        isLoading,
        library: library.current,
    }), [isLoading]);

    return (
        <PyodideContext.Provider value={initialData}>
            {children}
        </PyodideContext.Provider>
    );
});

export const usePyodideContext = () => (
    useContext(PyodideContext) as Required<PyodideSchema>
);
