import webpack from 'webpack';

import buildCssLoader from './loaders/buildCssLoader';
import buildBabelLoader from './loaders/buildBabelLoader';
import { BuildOptions } from './types/config';

/** Настройка загрузчиков файлов */
export function BuildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                    ],
                },
            },
        }],
    };

    const cssLoader = {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    };
    const scssLoader = buildCssLoader(isDev);
    const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });

    return [
        codeBabelLoader,
        tsxBabelLoader,
        scssLoader,
        cssLoader,
        fileLoader,
        svgLoader,
    ];
}
