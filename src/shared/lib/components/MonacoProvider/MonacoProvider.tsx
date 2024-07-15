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
import { ThemeCode, ThemesColors } from './const';

type MonacoEditor = typeof import('monaco-editor')

interface MonacoSchema {
    library?: MonacoEditor,
    isLoading?: boolean
}

const MonacoContext = createContext<MonacoSchema>({});

const getMonaco = async () => (
    import('monaco-editor')
);

/** Подгрузка monaco editor библиотеки */
export const MonacoProvider = memo(({ children }: {children: ReactElement}) => {
    const [isLoading, setIsloading] = useState(true);
    const library = useRef<MonacoEditor>();

    useEffect(() => {
        getMonaco().then((lib) => {
            library.current = lib;
            lib.editor.defineTheme(ThemeCode.LIGHT, {
                base: 'vs',
                inherit: true,
                rules: [],
                colors: ThemesColors[ThemeCode.LIGHT],
            });
            lib.editor.defineTheme(ThemeCode.DARK, {
                base: 'vs-dark',
                inherit: true,
                rules: [],
                colors: ThemesColors[ThemeCode.DARK],
            });
            lib.editor.defineTheme(ThemeCode.RED, {
                base: 'hc-black',
                inherit: true,
                rules: [],
                colors: ThemesColors[ThemeCode.RED],
            });
            setIsloading(false);
        });
    }, []);

    const initialData = useMemo(() => ({
        isLoading,
        library: library.current,
    }), [isLoading]);

    return (
        <MonacoContext.Provider value={initialData}>
            {children}
        </MonacoContext.Provider>
    );
});

export const useMonacoContext = () => (
    useContext(MonacoContext) as Required<MonacoSchema>
);
