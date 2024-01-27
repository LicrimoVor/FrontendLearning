/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-boolean-value */
import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    args: {
        title: 'Test in story',
        text: 'Hello world!',
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        theme: TextTheme.PRIMARY,
    },
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
    args: {
        theme: TextTheme.PRIMARY,
    },
};

export const Inverted: Story = {
    args: {
        theme: TextTheme.INVERTED,
    },
};

export const SizeM: Story = {
    args: {
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        size: TextSize.L,
    },
};

export const Error: Story = {
    args: {
        theme: TextTheme.ERROR,
    },
};
