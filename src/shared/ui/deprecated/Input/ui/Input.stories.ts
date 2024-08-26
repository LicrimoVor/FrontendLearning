import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/deprecated/Input',
    component: Input,
    args: {
        autofocus: true,
        placeholder: 'Stories:\\test',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = canvas.getByTestId('input');

        await userEvent.type(input, 'hello world!', {
            delay: 100,
        });
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

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
