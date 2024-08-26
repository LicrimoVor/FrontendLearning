import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import AvatarImg from '@/shared/assets/tests/avatar.jpg';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/deprecated/Avatar',
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
