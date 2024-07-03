import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import buildCssLoader from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        public: '',
        assets: '',
        buildSW: '',
        buildHtml: '',
    };

    config.resolve!.alias = { ...config.resolve?.alias, '@': paths.src };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule|any) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    if (config.module?.rules) {
        // Исключаем дефолтный png jpg svg loader
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map(
            // @ts-ignore
            (rule: webpack.RuleSetRule | '...') => {
                if (
                    rule !== '...'
                    && /svg/.test(rule.test as string)
                    && /png/.test(rule.test as string)
                    && /jpg/.test(rule.test as string)
                ) {
                    return { ...rule, exclude: /\.(png|jpe?g|svg)$/i };
                }
                return rule;
            },
        );
    }

    // Потом пушим наш лоадер для "png" и "jpg" лоадером:
    config.module?.rules?.push(
        {
        // Добавляем png jpg loader
            test: /\.(png|jpe?g)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/assets/', // Путь где будут лежать файлы
                    },
                },
            ],
        },
    );

    config.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module!.rules!.push(buildCssLoader(true));

    config.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
    }));
    return config;
};
