import { FC, memo } from 'react';
import type { SandpackPredefinedTemplate, SandpackFiles } from '@codesandbox/sandpack-react';

import { CodeSandboxProvider, useCodeSandboxContext } from '@/shared/lib/components/CodeSandbox';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import { MonacoEditor } from '../MonacoEditor/MonacoEditor';
import { CodeFileExplorer } from '../CodeFileExplorer/CodeFileExplorer';
import { CodeFileTabs } from '../CodeFileTabs/CodeFileTabs';
import { ThemeAppInSandbox } from '../../model/const/themes';

interface CodeSandboxProps {
    className?: string,
    height?: string | number,
    viewFiles?: boolean,
}

const CodeRunnerJsComponent: FC<CodeSandboxProps> = memo((
    props: CodeSandboxProps,
) => {
    const {
        className,
        height,
        viewFiles = true,
    } = props;

    const { library } = useCodeSandboxContext();
    const { sandpack } = library.useSandpack();

    return (
        <div className={className}>
            <library.SandpackLayout style={{ height }}>
                {viewFiles
                    ? (
                        <>
                            <CodeFileExplorer />
                            <library.SandpackStack style={{ height: '100%' }}>
                                <CodeFileTabs />
                                <MonacoEditor />
                            </library.SandpackStack>
                        </>
                    )
                    : <library.SandpackStack style={{ height: '100%' }}><MonacoEditor /></library.SandpackStack> }
                <library.SandpackStack style={{ height: '100%' }}>
                    <library.SandpackPreview
                        style={{ height: '100%' }}
                        showOpenInCodeSandbox={false}
                        showRefreshButton
                        showRestartButton
                        showSandpackErrorOverlay
                        showOpenNewtab
                    />
                    <library.SandpackConsole
                        style={{ fontSize: 18, height: '50%' }}
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
    template: SandpackPredefinedTemplate,
    files?: SandpackFiles,
}

const CodeRunnerJsLoading: FC<CodeSandboxLoadingProps> = memo((
    { template, files, ...props }: CodeSandboxLoadingProps,
) => {
    const { isLoading, library } = useCodeSandboxContext();
    const { theme } = useTheme();

    if (isLoading) {
        return 'loading...';
    }

    return (
        <library.SandpackProvider
            template={template}
            theme={ThemeAppInSandbox[theme]}
            files={files}
        >
            <CodeRunnerJsComponent {...props} />
        </library.SandpackProvider>
    );
});

export const CodeRunnerJs: FC<CodeSandboxLoadingProps> = memo((
    props: CodeSandboxLoadingProps,
) => (
    <CodeSandboxProvider>
        <CodeRunnerJsLoading {...props} />
    </CodeSandboxProvider>
));
