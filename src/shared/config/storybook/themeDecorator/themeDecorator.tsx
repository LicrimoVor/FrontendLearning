import { Decorator } from '@storybook/react';
// eslint-disable-next-line lkx-fsd/layer-checker
import '@/app/styles/index.scss';

import { ThemeProvider } from '@/shared/lib/components/ThemeProvider';
import { Theme } from '@/shared/lib/context/ThemeContext';

import cls from './themeDecorator.module.scss';

/** Декоратор тем для сторисов */
export const themeDecorator = (theme?: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme} ${cls.background}`}>
            <Story />
        </div>
    </ThemeProvider>
);
