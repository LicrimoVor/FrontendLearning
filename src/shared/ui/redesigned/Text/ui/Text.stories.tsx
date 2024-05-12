import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    args: {
        title: 'Test in story',
        text: 'Hello world!',
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        variant: 'primary',
    },
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
    args: {
        variant: 'primary',
    },
};

export const Accent: Story = {
    args: {
        variant: 'accent',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
    },
};

export const SizeM: Story = {
    args: {
        size: 'm',
    },
};

export const SizeL: Story = {
    args: {
        size: 'l',
    },
};
