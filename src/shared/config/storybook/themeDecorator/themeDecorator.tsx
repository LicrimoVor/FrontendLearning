import { Decorator } from '@storybook/react';

import '@/app/styles/index.scss';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import cls from './themeDecorator.module.scss';

/** Декоратор тем для сторисов */
export const themeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme} ${cls.background}`}>
            <Story />
        </div>
    </ThemeProvider>
);
