import { PluginItem } from '@babel/core';

export default (): PluginItem => ({
    visitor: {
        Program(path, state) {
            const forbidden = state.opts.props || [];

            path.traverse({
                JSXIdentifier(current) {
                    if (forbidden.includes(current.node.name)) {
                        current.parentPath.remove();
                    }
                },
            });
        },
    },
});
