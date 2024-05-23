import {
    useState, useMemo, FC, ReactNode, useEffect,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { useJsonSettings } from '@/entities/User';

import { ThemeContext, Theme } from '../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode,
    initialTheme?: Theme
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

/** Провайдер тем */
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [defaultTheme, isThemeInited, theme]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
