import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
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
}

/** Своя кнопочка */
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        inverted = false,
        children,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.inverted]: inverted,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, mods, [className])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
