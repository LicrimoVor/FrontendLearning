import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

/** Настройка дев сервера */
export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
