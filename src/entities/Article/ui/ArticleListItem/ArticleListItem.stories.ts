import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/types/article';
import { articleTest } from '../../model/test/data';
import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    args: {
        article: articleTest,
        view: ArticleView.SMALL,
    },
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

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

export const Small: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};
