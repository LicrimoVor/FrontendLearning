import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';

import AppLink from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/deprecated/AppLink',
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
