import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    args: {
        autofocus: true,
        placeholder: 'Stories:\\test',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = canvas.getByTestId('input');

        await userEvent.type(input, 'hello world!', {
            delay: 100,
        });
    },
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = canvas.getByTestId('input');

        await userEvent.type(input, 'hello world!', {
            delay: 100,
        });
    },
};
