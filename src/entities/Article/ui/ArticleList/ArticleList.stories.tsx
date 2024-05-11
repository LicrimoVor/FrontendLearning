import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { articleTest } from '../../test/data.test';
import { ArticleView } from '../../model/consts/article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    args: {
        isLoading: false,
        articles: Array(10).fill(articleTest),
        // eslint-disable-next-line i18next/no-literal-string
        // Header: () => <>Заголовок</>,
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

export const IsLoadingSmall: Story = {
    args: {
        isLoading: true,
        view: ArticleView.SMALL,
        articles: [],
    },
};

export const IsLoadingBig: Story = {
    args: {
        isLoading: true,
        view: ArticleView.BIG,
        articles: [],
    },
};
