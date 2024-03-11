import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { articleTest } from '../../test/data.test';
import { ArticleDetail } from './ArticleDetail';

const meta: Meta<typeof ArticleDetail> = {
    title: 'entities/Article/ArticleDetail',
    component: ArticleDetail,
    decorators: [
        storeDecorator({
            articleDetail: {
                data: articleTest,
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
