import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { userTest } from '@/entities/User/testing';
import { articleTest } from '@/entities/Article/testing';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,
    decorators: [
        storeDecorator({
            user: {
                authData: userTest,
                _inited: true,
            },
            articleDetail: {
                data: articleTest,
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

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
