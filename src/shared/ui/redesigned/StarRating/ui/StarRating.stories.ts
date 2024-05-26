import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/redesigned/StarRating',
    component: StarRating,
    args: {
        size: '70px',
        value: 3,
    },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

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
