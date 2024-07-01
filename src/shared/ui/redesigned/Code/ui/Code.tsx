import { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIconRedesigned from '@/shared/assets/icons/copy_redesigned.svg';
import { ColorSyntaxProvider } from '@/shared/lib/components/ColorSyntaxProvider';

import { Icon } from '../../../redesigned/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string,
    text: string,
    programLng?: string,
}

/**
 * Код
 */
const CodeComponent: FC<CodeProps> = memo((props: CodeProps) => {
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

export const CodeProvided: FC<CodeProps> = memo((props: CodeProps) => (
    <ColorSyntaxProvider>
        <CodeComponent {...props} />
    </ColorSyntaxProvider>
));
