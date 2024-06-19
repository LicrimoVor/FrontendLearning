import { Preview } from '@storybook/react';

import { storeDecorator } from '../../src/shared/config/storybook/storeDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator';
import { featureFlagDecorator } from '../../src/shared/config/storybook/featureFlagDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
                { name: 'dark', class: Theme.DARK, color: '#000000' },
                { name: 'red', class: Theme.RED, color: '#ca2424' },
            ],
        },
    },
    globals: {
        __IS_DEV__: true,
    },
    decorators: [
        routerDecorator,
        themeDecorator(Theme.LIGHT),
        storeDecorator({}),
        featureFlagDecorator({}),
    ],
    globalTypes: {
        locale: {
            name: 'Locale',
            description: 'Переводы!',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', title: 'English' },
                    { value: 'ru', title: 'Russian' },
                ],
                showName: true,
            },
        },
    },
};

export default preview;
