import webpack from 'webpack';

import { BuildOptions } from './types/config';

/** Настройка импортов */
export function BuildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    };
}
