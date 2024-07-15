import { FC, memo } from 'react';

import { CodeSandboxProvider, useCodeSandboxContext } from '@/shared/lib/components/CodeSandbox';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { SandpackFiles, SandpackTemplate } from '../../types';
import { MonacoEditor } from '../MonacoEditor/MonacoEditor';
import { ThemeAppInSandbox } from '../../const/themes';
import { CodeFileExplorer } from '../CodeFileExplorer/CodeFileExplorer';
import { CodeFileTabs } from '../CodeFileTabs/CodeFileTabs';

interface CodeSandboxProps {
    className?: string,
    height?: string| number,
}

const CodeSandboxComponent: FC <CodeSandboxProps> = memo((
    props: CodeSandboxProps,
) => {
    const {
        className,
        height,
    } = props;

    const { library } = useCodeSandboxContext();
    const { sandpack } = library.useSandpack();

    return (
        <div className={className}>
            <library.SandpackLayout style={{ height }}>
                <CodeFileExplorer />
                <library.SandpackStack style={{ height: '100%' }}>
                    <CodeFileTabs />
                    <MonacoEditor />
                </library.SandpackStack>
                <library.SandpackStack style={{ height: '100%' }}>
                    <library.SandpackPreview
                        showOpenInCodeSandbox={false}
                        showRefreshButton
                        showRestartButton
                        showSandpackErrorOverlay
                        showOpenNewtab
                    />
                    <library.SandpackConsole
                        style={{ fontSize: 18 }}
                        showSyntaxError
                        showRestartButton
                        showResetConsoleButton
                        actionsChildren={undefined}
                    />
                </library.SandpackStack>
            </library.SandpackLayout>
        </div>
    );
});

type CodeSandboxLoadingProps = CodeSandboxProps & {
    template: SandpackTemplate | 'python',
    files?: SandpackFiles,
}

const CodeSandboxLoading: FC <CodeSandboxLoadingProps> = memo((
    { template, files, ...props }: CodeSandboxLoadingProps,
) => {
    const { isLoading, library } = useCodeSandboxContext();
    const { theme } = useTheme();

    if (isLoading) {
        return 'loading...';
    }

    if (template === 'python') {
        return (
            <library.SandpackProvider
                theme={ThemeAppInSandbox[theme]}
            >
                {null}
            </library.SandpackProvider>
        );
    }

    return (
        <library.SandpackProvider
            template={template}
            theme={ThemeAppInSandbox[theme]}
            files={files}
        >
            <CodeSandboxComponent {...props} />
        </library.SandpackProvider>
    );
});

export const CodeSandbox: FC <CodeSandboxLoadingProps> = memo((
    props: CodeSandboxLoadingProps,
) => (
    <CodeSandboxProvider>
        <CodeSandboxLoading {...props} />
    </CodeSandboxProvider>
));
