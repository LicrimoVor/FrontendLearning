import { Decorator } from '@storybook/react';

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const themeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
