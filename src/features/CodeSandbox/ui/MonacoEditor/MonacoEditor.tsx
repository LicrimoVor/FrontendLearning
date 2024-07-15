import { memo, useMemo } from 'react';

import { LanguageCode } from '@/shared/types/language';
import { useCodeSandboxContext } from '@/shared/lib/components/CodeSandbox';
import { CodeEditor } from '@/shared/ui/redesigned/CodeEditor';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { Flex } from '@/shared/ui/redesigned/Stack';

import cls from './MonacoEditor.module.scss';

const ExtensionToLanguage: Record<string, LanguageCode> = {
    py: 'python',
    js: 'javascript',
    html: 'html',
    css: 'css',
    json: 'json',
};

export const MonacoEditor = memo(() => {
    const { library: { useActiveCode, useSandpack } } = useCodeSandboxContext();
    const { code, updateCode } = useActiveCode();
    const { sandpack } = useSandpack();
    const extension = useMemo(() => sandpack.activeFile.split('.').at(-1), [sandpack]);

    return (
        <CodeEditor
            width="100%"
            height="100%"
            key={sandpack.activeFile}
            language={extension ? ExtensionToLanguage[extension] : undefined}
            defaultValue={code}
            onChange={updateCode}
            LoadingFallback={<Flex max align="center" justify="center" className={cls.loader}><Loader /></Flex>}
        />
    );
});
