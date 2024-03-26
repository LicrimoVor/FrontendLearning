import { Meta, StoryObj } from '@storybook/react';

import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { profileTest } from '@/entities/Profile/testing';
import { userTest } from '@/entities/User/testing';

import { EditableProfileCard } from './EditableProfileCard';
import { profileRatingTest } from '../../ProfileRating/testing';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    args: {
        profileId: '1',
    },
    decorators: [
        storeDecorator({
            profile: {
                form: profileTest,
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
type Story = StoryObj<typeof EditableProfileCard>;

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
