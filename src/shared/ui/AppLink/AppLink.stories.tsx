import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
        children: 'test',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const PrimaryDark: Story = {

    decorators: [
        themeDecorator(Theme.DARK),
    ],

};
