import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

const meta: Meta<typeof ArticleViewSwitcher> = {
    title: '/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSwitcher>;

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
