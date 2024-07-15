import {
    FC, MutableRefObject, ReactElement, memo, useEffect, useRef,
} from 'react';

import { classNames } from '@/shared/lib/classNames';
import { MonacoProvider, ThemeAppInCode, useMonacoContext } from '@/shared/lib/components/MonacoProvider';
import { LanguageCode } from '@/shared/types/language';
import { useInitialRefEffect } from '@/shared/lib/hooks/useInitialRefEffect';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import { Loader } from '../../Loader';
import { CodeEditorElement, IDisposable } from '../types';
import cls from './CodeEditor.module.scss';

interface CodeEditorProps {
    className?: string,
    language?: LanguageCode,
    defaultValue?: string,
    height?: number | string,
    width?: number | string,
    onChange?: (val: string) => void,
    refEditor?: MutableRefObject<CodeEditorElement|undefined>,
}

/** Редактор кода */
const CodeEditorComponent: FC <CodeEditorProps> = memo((
    props: CodeEditorProps,
) => {
    const {
        className,
        defaultValue,
        height = '100%',
        width,
        onChange,
        language,
        refEditor,
    } = props;

    const refDiv = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const { library } = useMonacoContext();
    const refEditorLib = useRef<CodeEditorElement>();
    const subscriptionRef = useRef<IDisposable>();

    const onChangeHandler = useDebounce(() => {
        if (onChange && refEditorLib?.current) {
            const code = refEditorLib?.current.getModel()?.getValue();
            onChange(code || '');
        }
    }, 1250);

    useInitialRefEffect(() => {
        if (refDiv.current) {
            const editor = library.editor.create(
                refDiv.current,
                {
                    language,
                    wordWrap: 'on',
                    lineNumbers: 'on',
                    lineHeight: 18,
                    value: defaultValue,
                    automaticLayout: true,
                },
            );
            refEditorLib.current = editor;
        }

        return () => {
            refEditorLib.current?.dispose();
            subscriptionRef.current?.dispose();
        };
    }, [refDiv]);

    useEffect(() => {
        library.editor.setTheme(ThemeAppInCode[theme]);
    }, [library, theme]);

    useEffect(() => {
        if (refEditorLib.current) {
            subscriptionRef.current?.dispose();
            subscriptionRef.current = refEditorLib.current.onDidChangeModelContent(() => {
                onChangeHandler(refEditorLib.current!.getValue());
            });
        }
    }, [onChangeHandler]);

    useEffect(() => {
        if (refEditor && refEditorLib.current) {
            refEditor.current = refEditorLib.current;
        }
    }, [refEditor, refEditorLib]);

    return (
        <div
            className={classNames(cls.CodeEditor, {}, [className])}
            ref={refDiv}
            style={{ height, width }}
        />
    );
});

type CodeEditorLoadingProps = CodeEditorProps & {LoadingFallback?: ReactElement}

const CodeEditorLoading: FC<CodeEditorLoadingProps> = memo((
    { LoadingFallback, ...props }: CodeEditorLoadingProps,
) => {
    const { isLoading } = useMonacoContext();

    if (isLoading) {
        return (
            <div style={{ height: props.height }} className={props.className}>
                {LoadingFallback || <Loader />}
            </div>
        );
    }

    return <CodeEditorComponent {...props} />;
});

export const CodeEditor: FC<CodeEditorLoadingProps> = memo((
    props: CodeEditorLoadingProps,
) => (
    <MonacoProvider>
        <CodeEditorLoading {...props} />
    </MonacoProvider>
));
