import type { Meta, StoryObj } from '@storybook/react';

import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { profileTest } from 'entities/Profile/model/test/data';
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
                form: profileTest,
            },
        }),
    ],
};
