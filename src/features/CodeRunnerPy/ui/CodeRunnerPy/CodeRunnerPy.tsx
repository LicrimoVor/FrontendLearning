import {
    FC, memo, useCallback, useEffect, useImperativeHandle, useRef, useState,
} from 'react';

import { PyodideProvider, usePyodideContext } from '@/shared/lib/components/PyodideProvider';
import { Button } from '@/shared/ui/redesigned/Button';

import { MonacoEditor } from '../../../CodeRunnerJs/ui/MonacoEditor/MonacoEditor';

type CodeRunnerPyProps = {
    className?: string,
}

const CodeRunnerPyComponent: FC<CodeRunnerPyProps> = memo((
    props: CodeRunnerPyProps,
) => {
    const {
        className,
    } = props;

    return (
        <div className={className}>
            <MonacoEditor />
        </div>
    );
});

const CodeRunnerPyLoading: FC<CodeRunnerPyProps> = memo((
    props: CodeRunnerPyProps,
) => {
    const { isLoading } = usePyodideContext();

    if (isLoading) {
        return 'loading...';
    }

    return (
        <CodeRunnerPyComponent {...props} />
    );
});

export const CodeRunnerPy: FC<CodeRunnerPyProps> = memo((
    props: CodeRunnerPyProps,
) => (
    <PyodideProvider>
        <CodeRunnerPyLoading {...props} />
    </PyodideProvider>
));
