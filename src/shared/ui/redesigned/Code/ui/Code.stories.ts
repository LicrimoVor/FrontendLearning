import { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { newDesignDecorator } from '@/shared/config/storybook/newDesignDecorator';

import { CodeProvided as Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/redesigned/Code',
    component: Code,
    args: {
        text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    decorators: [
        newDesignDecorator,
    ],
};

export default meta;
type Story = StoryObj<typeof Code>;

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
