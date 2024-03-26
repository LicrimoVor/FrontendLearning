/* eslint-disable no-unused-vars */
import {
    ButtonHTMLAttributes, FC, forwardRef, LegacyRef, ReactNode,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_FULLL = 'clear_full',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
    BACKGROUND = 'background',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    inverted?: boolean,
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean,
    children?: ReactNode,
}

/** Своя кнопочка, поддерживает ref */
export const Button: FC<ButtonProps> = forwardRef((
    props: ButtonProps,
    ref: LegacyRef<HTMLButtonElement>,
) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        inverted = false,
        children,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.inverted]: inverted,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabledBtn]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    );
});
