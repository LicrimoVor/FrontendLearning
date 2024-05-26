import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/redesigned/Skeleton',
    component: Skeleton,
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        width: '100%',
        height: 200,
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const DefaultLight: Story = {};

export const DefaultDark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const DefaultRed: Story = {
    decorators: [
        themeDecorator(Theme.RED),
    ],
};

export const CircleLight: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const CircleDart: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const CircleRed: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        themeDecorator(Theme.RED),
    ],
};
