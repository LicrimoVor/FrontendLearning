import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailPage from './ArticleDetailPage';

const meta: Meta<typeof ArticleDetailPage> = {
    title: '/ArticleDetailPage',
    component: ArticleDetailPage,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailPage>;

export const Default: Story = {

};
