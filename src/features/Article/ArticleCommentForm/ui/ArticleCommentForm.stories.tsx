import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { ArticleCommentForm } from './ArticleCommentForm';
import { commentTest } from '@/entities/Comment/testing';

const meta: Meta<typeof ArticleCommentForm> = {
    title: 'features/Article/ArticleCommentForm',
    component: ArticleCommentForm,
    decorators: [
        storeDecorator({
            articleComments: {
                ids: [1, 2, 3],
                entities: {
                    1: commentTest,
                    2: commentTest,
                    3: commentTest,
                },
            },
        }),
    ],
    args: {
        articleId: '1',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleCommentForm>;

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
