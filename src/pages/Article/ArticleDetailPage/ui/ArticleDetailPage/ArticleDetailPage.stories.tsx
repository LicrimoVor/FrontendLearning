import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { articleTest } from '@/entities/Article/testing';
import { userTest } from '@/entities/User/testing';
import { commentTest } from '@/entities/Comment/testing';
import { articleRatingTest } from '@/features/Article/ArticleRating/testing';

import ArticleDetailPage from './ArticleDetailPage';

const meta: Meta<typeof ArticleDetailPage> = {
    title: 'pages/Article/ArticleDetailPage',
    component: ArticleDetailPage,
    decorators: [
        storeDecorator({
            articleDetail: {
                data: articleTest,
            },
            articleComments: {
                ids: [1, 2, 3],
                entities: {
                    1: { ...commentTest, id: '1' },
                    2: { ...commentTest, id: '2' },
                    3: { ...commentTest, id: '3' },
                },
            },
            user: {
                authData: userTest,
                _inited: true,
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
                ],
            },
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    articleRatingTest,
                ],
            },
        ],
    },
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
