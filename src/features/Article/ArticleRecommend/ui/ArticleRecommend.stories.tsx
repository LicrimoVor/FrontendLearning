import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { articleTest } from 'entities/Article/model/test/data';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { ArticleRecommend } from './ArticleRecommend';

const meta: Meta<typeof ArticleRecommend> = {
    title: 'pages/Article/ArticleRecommend',
    component: ArticleRecommend,
    decorators: [
        storeDecorator({
            articleDetail: {
                data: articleTest,
            },
            // articleRecommend: {
            //     ids: [],
            //     entities: {},
            // },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommend>;

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
