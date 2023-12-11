import { Decorator } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

export const themeDecorator = (Theme: Theme): Decorator => (Story) => (
    <div className={`app ${Theme}`}>
        <Story />
    </div>
);
