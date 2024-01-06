import path from 'path';

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
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    globals: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('/'),
        __PROJECT__: JSON.stringify('jest'),
    },
};
