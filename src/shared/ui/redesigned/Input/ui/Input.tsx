import {
    ChangeEvent, FC, InputHTMLAttributes, memo, ReactNode, useEffect, useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';

import { HStack } from '../../Stack';
import { Text } from '../../Text';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'|'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    label?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean,
    readonly?: boolean,
    addonLeft?: ReactNode,
    addonRight?: ReactNode,
}

/**
 * Кастомный инпут.
 */
export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        type = 'text',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    return (
        <HStack max gap={8}>
            {label && <Text text={label} textTag="label" htmlFor={label} />}
            <div className={classNames(cls.InputWrapper, mods, [className])}>
                {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
                <input
                    id={label}
                    data-testid="input"
                    value={value}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChangeHandler}
                    readOnly={readonly}
                    placeholder={placeholder}
                    type={type}
                    {...otherProps}
                />
                {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
            </div>
        </HStack>
    );
});
