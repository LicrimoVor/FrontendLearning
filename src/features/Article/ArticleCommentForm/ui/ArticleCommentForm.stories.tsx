import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { ArticleCommentForm } from './ArticleCommentForm';

const meta: Meta<typeof ArticleCommentForm> = {
    title: 'features/Article/ArticleCommentForm',
    component: ArticleCommentForm,
    decorators: [
        storeDecorator({
            articleComments: {
                ids: [],
                entities: {},
            },
        }),
    ],
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
