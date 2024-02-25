import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    args: {
        trigger: 'trigger',
        children: 'asdasdыфвапвыыыыыыыыыыыыыыыыыыыыыыыыыаплв ыьапэваылд ваыжапдлв ажпд лважпдл ',
    },
};

export default meta;
type Story = StoryObj<typeof Popover>;

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
