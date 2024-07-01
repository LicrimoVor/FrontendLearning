import {
    ReactElement, createContext, memo, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type Rainbow = typeof import('./rainbow.js');

interface ColorSyntaxState {
    isLoading?: boolean,
    rainbow?: Rainbow,
}

const getRainbowScript = async () => Promise.all([
    import('./rainbow.js'),
    import('./rainbow.scss'),
]);

const ColorSyntaxContext = createContext<ColorSyntaxState>({});

/** Ленивая подгрузка подсветки синтаксиса */
export const ColorSyntaxProvider = memo(({ children }: {children: ReactElement}) => {
    const [isLoading, setIsLoading] = useState(true);
    const Rainbow = useRef<Rainbow>();

    useEffect(() => {
        getRainbowScript().then(([rainbow, cls]) => {
            setIsLoading(true);
            rainbow.highlightAll();
            Rainbow.current = rainbow;
            console.log('!!');
        });
    }, [setIsLoading]);

    const providerState = useMemo(() => ({
        isLoading,
        rainbow: Rainbow.current,
    }), [isLoading]);

    return (
        <ColorSyntaxContext.Provider value={providerState}>
            {children}
        </ColorSyntaxContext.Provider>
    );
});

export const useColorSyntaxContext = () => (
    useContext(ColorSyntaxContext) as Required<ColorSyntaxState>
);
