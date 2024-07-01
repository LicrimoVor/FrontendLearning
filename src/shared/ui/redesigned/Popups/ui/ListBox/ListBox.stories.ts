import { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import ListBox from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/redesigned/ListBox',
    component: ListBox,
    args: {
        data: [
            { value: 'one' },
            { value: 'two' },
            { value: 'three' },
            { value: 'four' },
            { value: 'readonly', readonly: true },
            { value: 'readonly', readonly: true },
        ],
        label: 'storybook',
    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const Red: Story = {
    decorators: [
        themeDecorator(Theme.RED),
    ],
};

export const Disabled: Story = {
    args: {
        readonly: true,
    },
};
