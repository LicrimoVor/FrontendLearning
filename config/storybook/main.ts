import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
    ],
    framework: '@storybook/react-webpack5',

    docs: {
        autodocs: 'tag',
    },

    core: {
        builder: '@storybook/builder-webpack5',
    },
};

export default config;
