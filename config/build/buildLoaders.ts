import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

/** Настройка загрузчиков файлов */
export function BuildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|tsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const typesctiptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [
        babelLoader,
        typesctiptLoader,
        cssLoader,
        fileLoader,
        svgLoader,
    ];
}
