import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';
import { userTest } from '@/entities/User/testing';

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
