import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { NotificationList } from './NotificationList';
import { notificationTest } from '../../model/test/notification';

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
                    notificationTest,
                    notificationTest,
                    notificationTest,
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
