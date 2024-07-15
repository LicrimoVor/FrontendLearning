import { Theme } from '@/shared/lib/context/ThemeContext';
import { SandpackTheme } from '../types';

const DarkTheme: DeepPartial<SandpackTheme> = {
    colors: {
        surface1: '#151C1F',
        surface2: '#74A2B2',
        surface3: '#5ED3F3',
        disabled: '#0C1214',
        base: '#0C1214',
        clickable: '#DBDBDB',
        hover: '#5ED3F3',
        accent: '#74A2B2',
        error: '#DBDBDB',
        errorSurface: '#D9575775',
        warning: '#DBDBDB',
        warningSurface: '#e3e14770',
    },
    font: {
        body: 'Ubuntu',
        mono: 'Ubuntu',
        size: '18',
    },
};

const LightTheme: DeepPartial<SandpackTheme> = {
    colors: {
        surface1: '#E2EEF1',
        surface2: '#89aeb8',
        surface3: '#5ED3F3',
        disabled: '#EFF5F6',
        base: '#EFF5F6',
        clickable: '#141C1F',
        hover: '#00C8FF',
        accent: '#5ED3F3',
        error: '#141C1F',
        errorSurface: '#D9575775',
        warning: '#141C1F',
        warningSurface: '#e3e14770',
    },
    font: {
        body: 'Ubuntu',
        mono: 'Ubuntu',
        size: '18',
    },
};

const RedTheme: DeepPartial<SandpackTheme> = {
    colors: {
        surface1: '#660d0d',
        surface2: '#e27a18',
        surface3: '#ac6911',
        disabled: '#0C1214',
        base: '#0C1214',
        clickable: '#edf1ed',
        hover: '#e27a18',
        accent: '#ac6911',
        error: '#edf1ed',
        errorSurface: '#D9575775',
        warning: '#edf1ed',
        warningSurface: '#e3e14770',
    },
    font: {
        body: 'Ubuntu',
        mono: 'Ubuntu',
        size: '18',
    },
};

export const ThemeAppInSandbox: Record<Theme, DeepPartial<SandpackTheme>> = {
    app_dark_theme: DarkTheme,
    app_light_theme: LightTheme,
    app_red_theme: RedTheme,
};
