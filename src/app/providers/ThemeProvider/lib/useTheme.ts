import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  hundlerTheme: () => void;
  theme: Theme;
}

/** хук для тем (мой первый хук) */
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const hundlerTheme = () => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.RED;
            break;
        case Theme.RED:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    document.body.className = theme as string;

    return {
        theme: theme || Theme.LIGHT,
        hundlerTheme,
    };
}
