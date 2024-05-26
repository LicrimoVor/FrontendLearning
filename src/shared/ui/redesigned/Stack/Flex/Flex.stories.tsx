/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/redesigned/Flex',
    component: Flex,
    args: {
        children: (
            <>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
                <div>first</div>
            </>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {};

export const Gap4: Story = {
    args: {
        gap: 4,
    },
};

export const Gap32: Story = {
    args: {
        gap: 32,
    },
};

export const DirectionColumn: Story = {
    args: {
        direction: 'column',
    },
};

export const JustifyEnd: Story = {
    args: {
        justify: 'end',
    },
};

export const AlignEnd: Story = {
    args: {
        align: 'end',
    },
};

export const ComponentH1: Story = {
    args: {
        Component: 'h1',
    },
};
