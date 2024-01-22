import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { articleTest } from 'entities/Article/model/test/data';
import { ArticleView } from 'entities/Article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    args: {
        articles: [articleTest, articleTest, articleTest],
    },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

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
    args: {
        view: ArticleView.BIG,
    },
};

export const IsLoadingSmall: Story = {
    args: {
        isLoading: true,
        view: ArticleView.SMALL,
    },
};

export const IsLoadingBig: Story = {
    args: {
        isLoading: true,
        view: ArticleView.BIG,
    },
};