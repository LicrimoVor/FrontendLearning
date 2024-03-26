import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { NotificationList } from './NotificationList';
import { notificationTest } from '../../test/data.test';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [
        storeDecorator({}),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications?_limit=5`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notificationTest, id: 1 },
                    { ...notificationTest, id: 2 },
                    { ...notificationTest, id: 3 },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

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

export const Loading: Story = {
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications?_limit=5`,
                method: 'GET',
                status: 200,
                response: [
                    notificationTest,
                    notificationTest,
                    notificationTest,
                ],
                delay: 100000,
            },
        ],
    },
};
