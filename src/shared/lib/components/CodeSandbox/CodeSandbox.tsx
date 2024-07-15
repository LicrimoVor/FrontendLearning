import {
    ReactElement, createContext, memo, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

import { Loader } from '@/shared/ui/redesigned/Loader';

type CodeSandboxEditor = typeof import('@codesandbox/sandpack-react')

interface CodeSandboxSchema {
    library?: CodeSandboxEditor,
    isLoading?: boolean
}

const CodeSandboxContext = createContext<CodeSandboxSchema>({});

const getCodeSandbox = async () => (
    import('@codesandbox/sandpack-react')
);

/** Подгрузка CodeSandbox editor библиотеки */
export const CodeSandboxProvider = memo(({ children }: {children: ReactElement}) => {
    const [isLoading, setIsloading] = useState(true);
    const library = useRef<CodeSandboxEditor>();

    useEffect(() => {
        getCodeSandbox().then((lib) => {
            setIsloading(false);
            library.current = lib;
        });
    }, []);

    const initialData = useMemo(() => ({
        isLoading,
        library: library.current,
    }), [isLoading]);

    return (
        <CodeSandboxContext.Provider value={initialData}>
            {children}
        </CodeSandboxContext.Provider>
    );
});

export const useCodeSandboxContext = () => (
    useContext(CodeSandboxContext) as Required<CodeSandboxSchema>
);
