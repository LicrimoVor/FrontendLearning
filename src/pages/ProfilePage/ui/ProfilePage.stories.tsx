import { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import AvatarImg from '@/shared/assets/tests/avatar.jpg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { userTest } from '@/entities/User/testing';
import { profileRatingTest } from '@/features/Profile/ProfileRating/testing';

import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        storeDecorator({
            profile: {
                form: {
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
            user: {
                authData: userTest,
                _inited: true,
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: [profileRatingTest],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

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
