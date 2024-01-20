import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    args: {
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
