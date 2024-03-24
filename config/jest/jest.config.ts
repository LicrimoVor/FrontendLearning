import path from 'path';
import 'whatwg-fetch';

export default {

    clearMocks: true,

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleDirectories: [
        'node_modules',
        'src',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    rootDir: '../../',
    testEnvironment: 'jsdom',

    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],

    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts',
    ],

    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.(jpg|svg)$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^@/(.*)$': '<rootDir>src/$1',
    },

    globals: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('/'),
        __PROJECT__: JSON.stringify('jest'),
    },

    transformIgnorePatterns: ['node_modules/(?!axios)'],

    reporters: [
        'default',
        ['jest-html-reporters', {
            publicPath: '<rootDir>/reports/unit',
            filename: 'report.html',
            openReport: true,
        }],
    ],
};
