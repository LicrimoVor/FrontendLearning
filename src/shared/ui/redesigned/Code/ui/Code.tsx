import { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import CopyIconRedesigned from '@/shared/assets/icons/copy_redesigned.svg';
import { ToggleFeatures } from '@/shared/lib/features';

import { Button, ButtonTheme } from '../../../deprecated/Button/ui/Button';
import { Icon } from '../../Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string,
    text: string,
}

/**
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button
                        onClick={onCopy}
                        className={cls.copyBtn}
                        theme={ButtonTheme.CLEAR}
                    >
                        <CopyIcon className={cls.copyIcon} />
                    </Button>
                    <code>{text}</code>
                </pre>
            )}
            on={(
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIconRedesigned}
                    />
                    <code>{text}</code>
                </pre>
            )}
        />
    );
});
