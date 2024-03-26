import { Preview } from '@storybook/react';

import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';
import { Theme } from '../../src/shared/lib/context/ThemeContext';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
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
    ],
    // globalTypes: {
    //     locale: {
    //         name: 'Locale',
    //         description: 'Переводы!',
    //         toolbar: {
    //             icon: 'globe',
    //             items: [
    //                 { value: 'en', title: 'English' },
    //                 { value: 'ru', title: 'Russian' },
    //             ],
    //             showName: true,
    //         },
    //     },
    // },
};

export default preview;
