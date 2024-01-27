import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Size200px: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    args: {
        label: 'label',
        options: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};
