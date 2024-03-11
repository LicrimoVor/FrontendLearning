import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { ArticleView } from '@/entities/Article';
import { articleTest } from '@/entities/Article/testing';

import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
    title: 'pages/Article/ArticlePage',
    component: ArticlePage,
    decorators: [
        storeDecorator({
            articlePage: {
                entities: {
                    1: articleTest,
                    2: articleTest,
                    3: articleTest,
                    4: articleTest,
                    5: articleTest,
                    6: articleTest,
                    7: articleTest,
                    8: articleTest,
                },
                ids: [1, 2, 3, 4, 5, 6, 7, 8],
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=5`,
                method: 'GET',
                status: 200,
                response: [
                    articleTest,
                    articleTest,
                    articleTest,
                    articleTest,
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

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

export const Big: Story = {
    decorators: [
        storeDecorator({
            articlePage: {
                entities: {
                    1: articleTest,
                    2: articleTest,
                    3: articleTest,

                },
                ids: [1, 2, 3],
                view: ArticleView.BIG,
            },
        }),
    ],
};

export const IsLoading: Story = {
    decorators: [
        storeDecorator({
            articlePage: {
                entities: {},
                ids: [],
                isLoading: true,
            },
        }),
    ],
};
