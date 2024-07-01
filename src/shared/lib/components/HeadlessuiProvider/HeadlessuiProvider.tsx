import {
    ReactElement, createContext, memo, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type Headlessui = typeof import('@headlessui/react')

interface HeadlessuiSchema {
    library?: Headlessui,
    isLoading?: boolean
}

const HeadlessuiContext = createContext<HeadlessuiSchema>({});

const getHeadssui = async () => (
    import('@headlessui/react')
);

/** Подгрузка headlessui библиотеки */
export const HeadlessuiProvider = memo(({ children }: {children: ReactElement}) => {
    const [isLoading, setIsloading] = useState(true);
    const library = useRef<Headlessui>();

    useEffect(() => {
        getHeadssui().then((lib) => {
            setIsloading(false);
            library.current = lib;
        });
    }, []);

    const initialData = useMemo(() => ({
        isLoading,
        library: library.current,
    }), [isLoading]);
    return (
        <HeadlessuiContext.Provider value={initialData}>
            {children}
        </HeadlessuiContext.Provider>
    );
});

export const useHealdessuiContext = () => (
    useContext(HeadlessuiContext) as Required<HeadlessuiSchema>
);
