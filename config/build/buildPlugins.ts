import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkIsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import { PyodidePlugin } from '@pyodide/webpack-plugin';
import { BuildOptions } from './types/config';
import { ServiceWorkerPlugin } from './plugins/ServiceWorkerPlugin';
import { PreloadPlugin } from './plugins/PreloadPlugin';

/** Настройка плагинов */
export function BuildPlugins(
    {
        paths, isDev, apiUrl, project,
    }: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;

    const plugins: webpack.WebpackPluginInstance[] = [
        new PyodidePlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new MonacoWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    globOptions: {
                        ignore: ['**/public/index.html', '**/*.brak', '**/*.notCp/*'],
                    },
                    from: paths.public,
                    to: paths.build,
                },
            ],
        }),

    ];

    if (isDev) {
        plugins.push(new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }));
        plugins.push(new ForkIsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }));
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
        plugins.push(new StatoscopeWebpackPlugin({
            saveReportTo: `${paths.build}/report-[name]-hash.html`,
            open: 'file',
            compressor: 'gzip',
        }));
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
        plugins.push(new AssetsPlugin({
            fullPath: true,
            path: paths.assets,
        }));
        plugins.push(new ServiceWorkerPlugin({
            pathAssets: `${paths.assets}/webpack-assets.json`,
            pathBuildSW: paths.buildSW,
            ignoreFiles: [
                '/index.html',
                '/sw.js',
            ],
        }));
        plugins.push(new PreloadPlugin({
            pathBuildIndex: paths.buildHtml,
            pathCssPreload: `${paths.public}/preInit.notCp/preload.css`,
            pathJsPreload: `${paths.public}/preInit.notCp/preload.js`,
        }));
    }

    return plugins;
}
