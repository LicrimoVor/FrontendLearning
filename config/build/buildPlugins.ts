import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** Настройка плагинов */
export function BuildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshPlugin());
    }

    return plugins;
}
