import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const DefaultLight: Story = {
    args: {
        width: '100%',
        height: 200,
    },

};

export const DefaultDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const DefaultRed: Story = {
    args: {
        width: '100%',
        height: 200,
    },
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
