import type { Decorator, Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem similique optio mollitia dignissimos tenetur recusandae. Fugit nostrum beatae consequuntur, veritatis exercitationem quis? Eligendi officiis placeat, error possimus quo maxime?',
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

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
