import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.querySelector('body')!.appendChild(modalRoot);

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem similique optio mollitia dignissimos tenetur recusandae. Fugit nostrum beatae consequuntur, veritatis exercitationem quis? Eligendi officiis placeat, error possimus quo maxime?',
        element: modalRoot,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    loaders: [
        () => {
            modalRoot.className = `app ${Theme.LIGHT}`;
        },
    ],
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    loaders: [
        () => {
            modalRoot.className = `app ${Theme.DARK}`;
        },
    ],
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};
