import type { Meta, StoryObj } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            username: 'licrimovor',
            age: 21,
            country: Country.Russia,
            lastname: 'licrimovor',
            first: 'ivan',
            city: 'SBK',
            currency: Currency.RUB,
            avatar: AvatarImg,
        },
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
