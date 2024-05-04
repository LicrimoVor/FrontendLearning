import {
    useState, useMemo, FC, ReactNode, useEffect,
} from 'react';
// eslint-disable-next-line lkx-fsd/layer-checker
import { useJsonSettings } from '@/entities/User';

import { ThemeContext, Theme } from '../../context/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode,
    initialTheme?: Theme
}

/** Провайдер тем */
export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

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
