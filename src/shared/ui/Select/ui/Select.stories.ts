import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    args: {
        label: 'label',
        options: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const LIGHT: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const DARK: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const RED: Story = {
    decorators: [
        themeDecorator(Theme.RED),
    ],
};
