import { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { Text } from '../../Text';
import Card, { CardTheme } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/deprecated/Card',
    component: Card,
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <Text text="test" title="Test" />,
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

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

export const Outline: Story = {
    args: {
        theme: CardTheme.OUTLINE,
    },
};
