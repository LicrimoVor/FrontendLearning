import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
        storeDecorator({}),
    ],
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({}),
    ],
};

export const Auth: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
        storeDecorator({ user: { authData: {} } }),
    ],
};
