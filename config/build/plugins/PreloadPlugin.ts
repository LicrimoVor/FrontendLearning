import { Compiler } from 'webpack';
import fs from 'fs';
import CleanCss from 'clean-css';
import { JSDOM } from 'jsdom';

interface PreloadPluginProps {
    pathBuildIndex: string,
    pathCssPreload: string,
    pathJsPreload: string
}

export class PreloadPlugin {
    options: PreloadPluginProps;

    constructor(options: PreloadPluginProps) {
        this.options = options;
    }

    apply = (compiler: Compiler): void => {
        compiler.hooks.afterEmit.tap('PreloadPlugin', () => {
            const jsFile = fs.readFileSync(this.options.pathJsPreload);
            const outputJs = String(jsFile).split('\n').join('');
            const cssFile = fs.readFileSync(this.options.pathCssPreload);
            const outputCss = new CleanCss().minify(String(cssFile)).styles;

            JSDOM.fromFile(this.options.pathBuildIndex)
                .then((file) => {
                    const cssTag = file.window.document.querySelector('#cssPreload');
                    if (cssTag) cssTag.textContent = outputCss;
                    const jsTag = file.window.document.querySelector('#jsPreload');
                    if (jsTag) jsTag.textContent = outputJs;

                    const html = file.serialize();
                    fs.writeFileSync(this.options.pathBuildIndex, html);
                });
        });
    };
}
