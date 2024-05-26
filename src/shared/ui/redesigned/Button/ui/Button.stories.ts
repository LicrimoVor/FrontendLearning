import { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/redesigned/Button',
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
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const SizeM: Story = {
    args: {
        square: true,
        size: 'm',
        children: '<',
    },
};

export const SizeL: Story = {
    args: {
        square: true,
        size: 'l',
        children: '<',
    },
};

export const SizeXL: Story = {
    args: {
        square: true,
        size: 'xl',
        children: '<',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Login',
        disabled: true,
    },
};
