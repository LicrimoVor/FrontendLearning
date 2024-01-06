import type { Meta, StoryObj } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
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
        }),
    ],
};
