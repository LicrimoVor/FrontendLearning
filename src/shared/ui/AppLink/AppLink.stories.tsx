import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'test',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

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
