import { Preview } from '@storybook/react';

import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        styleDecorator,
        themeDecorator(Theme.LIGHT),
        routerDecorator,
    ],
};

export default preview;
