import type { Meta, StoryObj } from '@storybook/react';

import { profileTest } from '../model/test/data';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: profileTest,
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};

export const Error: Story = {
    args: {
        error: 'true',
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};
