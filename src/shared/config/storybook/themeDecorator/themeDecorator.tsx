import { Decorator } from '@storybook/react';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

/** Декоратор тем для сторисов */
export const themeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
