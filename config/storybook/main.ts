import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
        '@chromatic-com/storybook',
    ],
    framework: '@storybook/react-webpack5',

    docs: {
        autodocs: 'tag',
    },
    swc: (config, options) => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),

    core: {
        builder: '@storybook/builder-webpack5',
    },
};

export default config;
