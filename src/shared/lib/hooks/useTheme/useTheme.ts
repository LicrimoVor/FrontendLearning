import { useContext } from 'react';

import { Theme, ThemeContext } from '../../context/ThemeContext/ThemeContext';

interface UseThemeResult {
  hundlerTheme: (saveAction: (theme: Theme) => void) => void;
  theme: Theme;
}

export const nextTheme = (theme?: Theme) => {
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
    return newTheme;
};

/** хук для тем (мой первый хук) */
export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const hundlerTheme = (saveAction: (theme: Theme) => void) => {
        const newTheme = nextTheme(theme);
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    document.body.className = theme as string;

    return {
        theme: theme || Theme.LIGHT,
        hundlerTheme,
    };
}
