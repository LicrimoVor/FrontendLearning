import {
    ChangeEvent, FC, memo, TextareaHTMLAttributes, useCallback, useMemo,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './TextArea.module.scss';

type HTMLTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'|'onChange' | 'readonly' | 'rows'>

interface TextAreaProps extends HTMLTextAreaProps {
    className?: string,
    value?: string,
    autofocus?: boolean,
    height?: string | number,
    onChange?: (val: string) => void,
    rows?: number,
    overflow?: boolean,
}

/** Текстовое поле для ввода */
export const TextArea: FC<TextAreaProps> = memo((props: TextAreaProps) => {
    const {
        className,
        value,
        autofocus,
        placeholder,
        height,
        onChange,
        overflow,
        rows,
        ...otherProps
    } = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        if (rows && e.target.scrollHeight / 24 > rows) {
            return;
        }

        if (onChange) {
            onChange(e.target.value.substring(2));
        }
    }, [onChange, rows]);

    const modsArea: Mods = useMemo(() => ({
        [cls.overflow]: overflow,
    }), [overflow]);

    return (
        <div
            className={classNames(cls.TextArea, {}, [className])}
        >
            <textarea
                value={`  ${value || ''}`}
                style={{ height }}
                onChange={onChangeHandler}
                wrap="soft"
                rows={rows}
                className={classNames(cls.textInput, modsArea)}
                {...otherProps}
            />
            <span
                className={cls.arrow}
            >
                {'>'}
            </span>
        </div>

    );
});
