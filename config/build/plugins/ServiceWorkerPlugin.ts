import { Compiler } from 'webpack';
import { Project, PropertyAccessExpression, SyntaxKind } from 'ts-morph';
import fs from 'fs';

const isAddAll = (node: PropertyAccessExpression): boolean => node.getName() === 'addAll';

const format = (value: string): string => (`'${value}',`);

const getAssets = (pathAsstets: string, ignoreFiles?: string[]): string[] => {
    const fileAsstets = fs.readFileSync(pathAsstets).toString();
    const assets: string[] = [];
    Object.values(JSON.parse(fileAsstets)).map((value) => {
        if (typeof value === 'object') {
            Object.values(value as object).map((value) => {
                if (typeof value === 'object') {
                    assets.push(...Object.values(value as object).map(format));
                } else {
                    assets.push(format(value as string));
                }
                return undefined;
            });
        } else {
            assets.push(format(value as string));
        }
        return undefined;
    });
    assets.filter((value) => Boolean(ignoreFiles?.includes(value.substring(1, value.length - 2))));
    return assets;
};

interface ServiceWorkerPluginProps {
    pathBuildSW: string,
    pathAssets: string,
    ignoreFiles?: string[],
}

export class ServiceWorkerPlugin {
    options: ServiceWorkerPluginProps;

    constructor(options: ServiceWorkerPluginProps) {
        this.options = options;
    }

    apply = (compiler: Compiler): void => {
        compiler.hooks.afterEmit.tap('ServiceWorkerPlugin', () => {
            const project = new Project({});
            project.addSourceFileAtPath(this.options.pathBuildSW);
            const file = project.getSourceFile('sw.js');
            const assets = getAssets(this.options.pathAssets);

            file?.forEachDescendant((node) => {
                if (node.isKind(SyntaxKind.PropertyAccessExpression) && isAddAll(node)) {
                    const parent = node.getParent();
                    const array = parent?.getFirstChildByKind(SyntaxKind.ArrayLiteralExpression);
                    array?.addElements(assets);
                }
            });
            project.save();
        });
    };
}
