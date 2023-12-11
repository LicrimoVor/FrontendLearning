import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const PrimaryLight: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const PrimaryDark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};
