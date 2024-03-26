import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const login = canvas.getByTestId('username');

        await userEvent.type(login, 'project@test.ru', {
            delay: 100,
        });

        const password = canvas.getByTestId('password');
        await userEvent.type(password, 'secret_password', {
            delay: 100,
        });
    },
    decorators: [
        storeDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

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

export const Error: Story = {
    decorators: [
        storeDecorator({
            loginForm: {
                username: 'ErorMe',
                password: 'qwerty',
                error: 'ERROR!',
            },
        }),
    ],
    play: undefined,
};
