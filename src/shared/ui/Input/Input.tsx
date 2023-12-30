import {
    ChangeEvent,
    FC, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void,
    type?: string,
    autofocus?: boolean,
}

/** Кастомный инпут.
 * Каретку в продакшене не повторять!
 * Такие изащрения не нужны!
 */
export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(autofocus);
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

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
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
                    className={cls.input}
                    {...otherProps}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>

        </div>
    );
});
