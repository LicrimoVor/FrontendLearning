import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { LOCAL_STORAGE_THEME_KEY, Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
        storeDecorator({ user: { authData: {} } }),
    ],
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({ user: { authData: {} } }),
    ],
    loaders: [
        () => { window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.DARK); },
    ],
};

export const NoAuth: Story = {
    decorators: [
        storeDecorator({ user: {} }),
    ],
    loaders: [
        () => { window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.DARK); },
    ],
};
