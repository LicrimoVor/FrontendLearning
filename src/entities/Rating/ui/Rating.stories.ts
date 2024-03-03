import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'entities/Rating',
    component: Rating,
    args: {
        selectStar: 3,
        feedback: true,
        feedbackTitle: 'Титул фидбека',
        feedbackValue: 'Какой нибудь отзыв',
        title: 'Титульник',
    },
};

export default meta;
type Story = StoryObj<typeof Rating>;

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

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
