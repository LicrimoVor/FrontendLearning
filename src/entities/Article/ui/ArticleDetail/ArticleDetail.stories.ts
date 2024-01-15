import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { articleData } from 'entities/Article/model/test/data';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { ArticleDetail } from './ArticleDetail';

const meta: Meta<typeof ArticleDetail> = {
    title: 'entities/ArticleDetail',
    component: ArticleDetail,
    decorators: [
        storeDecorator({
            articleDetail: {
                data: articleData,
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetail>;

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
    decorators: [
        storeDecorator({
            articleDetail: {
                isLoading: true,
            },
        }),
    ],
};

export const Error: Story = {
    decorators: [
        storeDecorator({
            articleDetail: {
                error: 'true',
            },
        }),
    ],
};
