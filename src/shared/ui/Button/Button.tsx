/* eslint-disable no-unused-vars */
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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

/** Своя кнопочка */
export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
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
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, mods, [className])
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
