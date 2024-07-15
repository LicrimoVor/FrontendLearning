import { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIconRedesigned from '@/shared/assets/icons/copy_redesigned.svg';
import { ColorSyntaxProvider } from '@/shared/lib/components/ColorSyntaxProvider';

import { Icon } from '../../Icon';
import cls from './CodeView.module.scss';

interface CodeViewProps {
    className?: string,
    text: string,
    programLng?: string,
}

/**
 * Код
 */
const CodeViewComponent: FC<CodeViewProps> = memo((props: CodeViewProps) => {
    const {
        className,
        text,
        programLng,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre
            className={classNames(cls.Code, {}, [className])}
        >
            <Icon
                aria-labelledby="copy-code"
                clickable
                onClick={onCopy}
                className={cls.copyBtn}
                Svg={CopyIconRedesigned}
            />
            <code
                className={`language-${programLng}`}
            >
                {text}
            </code>
        </pre>
    );
});

export const CodeViewProvided: FC<CodeViewProps> = memo((props: CodeViewProps) => (
    <ColorSyntaxProvider>
        <CodeViewComponent {...props} />
    </ColorSyntaxProvider>
));
