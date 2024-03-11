import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { CommentList } from './CommentList';
import { commentTest } from '../../test/data.test';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    args: {
        comments: [
            commentTest,
            commentTest,
            commentTest,
            commentTest,
            commentTest,
        ],
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

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

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};
