import { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/redesigned/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem similique optio mollitia dignissimos tenetur recusandae. Fugit nostrum beatae consequuntur, veritatis exercitationem quis? Eligendi officiis placeat, error possimus quo maxime?',
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

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
