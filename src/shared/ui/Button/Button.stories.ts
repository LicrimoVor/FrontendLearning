import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'test',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultLight: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const DefaultDark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};

export const Outlineinverted: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        inverted: true,
    },
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
    },
};

export const Backgroundinverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        inverted: true,
    },
};

export const SizeM: Story = {
    args: {
        square: true,
        size: ButtonSize.M,
        children: '<',
    },
};

export const SizeL: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        children: '<',
    },
};

export const SizeXL: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        children: '<',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Login',
        disabled: true,
    },
};
