import {
    ChangeEvent,
    FC, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'|'value'|'onChange' | 'readonly'>

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    size?: InputSize,
    onChange?: (value: string) => void,
    type?: string,
    autofocus?: boolean,
    readonly?: boolean,
}

/**
 * @deprecated
 * Кастомный инпут.
 * Каретку в продакшене не повторять!
 * Такие изащрения не нужны!
 */
const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        size = 'm',
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target.selectionStart);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className, cls[size]])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    data-testid="input"
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={classNames(cls.input, mods)}
                    {...otherProps}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>

        </div>
    );
});

export default Input;
export type InputType = typeof Input;
