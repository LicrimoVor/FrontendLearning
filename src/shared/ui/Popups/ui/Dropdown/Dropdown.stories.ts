import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    args: {
        data: [
            { component: 'one', onClick: () => 1 },
            { component: 'two', onClick: () => 2 },
            { component: 'three', onClick: () => 3 },
            { component: 'four', onClick: () => 4 },
        ],
        label: 'test',
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

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
