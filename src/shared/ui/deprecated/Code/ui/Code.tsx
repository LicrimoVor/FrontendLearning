import { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../Button/ui/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string,
    text: string,
}

/**
 * @deprecated
 * Код
 */
export const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code
                className={cls.codeText}
            >
                {text}
            </code>
        </pre>
    );
});
