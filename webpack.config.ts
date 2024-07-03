import webpack from 'webpack';
import path from 'path';

import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';
    const port = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
        assets: path.resolve(__dirname, 'config', 'build'),
        buildSW: path.resolve(__dirname, 'build', 'sw.js'),
        buildHtml: path.resolve(__dirname, 'build', 'index.html'),
    };

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        project: 'frontend',
    });
    return config;
};
