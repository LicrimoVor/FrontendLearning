import webpack from 'webpack';

import { BuildPlugins } from './buildPlugins';
import { BuildLoaders } from './buildLoaders';
import { BuildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { BuildDevServer } from './buildDevServer';

/** Общая сборка настроек */
export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        // файлы для сборки
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: BuildPlugins(options),
        module: {
            rules: BuildLoaders(options),
        },
        resolve: BuildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined,
    };
}
