import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from './avatar.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Size200px: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        src: AvatarImg,
        size: 200,
    },
};

export const Size100px: Story = {

    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        src: AvatarImg,
        size: 100,
    },
};
