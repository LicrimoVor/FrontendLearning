import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { articleTest } from 'entities/Article/model/test/data';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import ArticleDetailPage from './ArticleDetailPage';

const meta: Meta<typeof ArticleDetailPage> = {
    title: 'pages/ArticleDetailPage',
    component: ArticleDetailPage,
    decorators: [
        storeDecorator({
            articleDetail: {
                data: articleTest,
            },
            articleDetailPage: {
                comments: {
                    ids: [],
                    entities: {},
                },
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailPage>;

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
