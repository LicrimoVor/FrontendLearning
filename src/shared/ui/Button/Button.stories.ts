import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'test',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

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
