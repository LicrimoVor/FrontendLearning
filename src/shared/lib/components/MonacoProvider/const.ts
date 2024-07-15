import { Theme } from '../../context/ThemeContext';

export enum ThemeCode {
    LIGHT = 'app-light',
    DARK = 'app-dark',
    RED = 'app-red'
}

export const ThemeAppInCode: Record<Theme, ThemeCode> = {
    app_dark_theme: ThemeCode.DARK,
    app_light_theme: ThemeCode.LIGHT,
    app_red_theme: ThemeCode.RED,
};

export const ThemesColors: Record<ThemeCode, Record<string, string>> = {
    [ThemeCode.LIGHT]: {
        'editor.background': '#E2EEF1',
        'dropdown.background': '#EFF5F6',
        'dropdown.border': '#89aeb8',
    },
    [ThemeCode.DARK]: {
        'editor.background': '#151C1F',
        'dropdown.background': '#0C1214',
        'dropdown.border': '#628a97',
    },
    [ThemeCode.RED]: {
        'editor.background': '#420000',
        'dropdown.background': '#310000',
        'dropdown.border': '#c42e2e',
    },
};
