import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { ThemeSwitcherDep } from './ThemeSwitcherDep';

const meta: Meta<typeof ThemeSwitcherDep> = {
    title: 'features/ThemeSwitcherDep',
    component: ThemeSwitcherDep,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcherDep>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        theme: Theme.LIGHT,
    },
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
    args: {
        theme: Theme.DARK,
    },
};

export const Red: Story = {
    decorators: [
        themeDecorator(Theme.RED),
    ],
    args: {
        theme: Theme.RED,
    },
};
