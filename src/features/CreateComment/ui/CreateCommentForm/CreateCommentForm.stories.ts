import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import CreateCommentForm from './CreateCommentForm';

const meta: Meta<typeof CreateCommentForm> = {
    title: 'features/CreateCommentForm',
    component: CreateCommentForm,
    args: {
        onCommentSend: (test: string) => (test),
    },
    decorators: [
        storeDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof CreateCommentForm>;

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
