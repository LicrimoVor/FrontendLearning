import type { Meta, StoryObj } from '@storybook/react';

import { storeDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import { profileTest } from '@/entities/Profile/testing';
import { EditableProfileCard } from './EditableProfileCard';
import { userTest } from '@/entities/User/testing';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

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
