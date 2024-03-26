import webpack from 'webpack';

import buildCssLoader from './loaders/buildCssLoader';
import buildBabelLoader from './loaders/buildBabelLoader';
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

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoader(isDev);
    const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });

    return [
        codeBabelLoader,
        tsxBabelLoader,
        cssLoader,
        fileLoader,
        svgLoader,
    ];
}
