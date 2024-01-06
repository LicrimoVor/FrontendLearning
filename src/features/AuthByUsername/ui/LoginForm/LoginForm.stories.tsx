import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
        storeDecorator({}),
    ],
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
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({}),
    ],
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
};

export const Error: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
        storeDecorator({
            loginForm: {
                username: 'ErorMe',
                password: 'qwerty',
                error: 'ERROR!',
            },
        }),
    ],
};
