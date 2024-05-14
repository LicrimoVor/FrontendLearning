/* eslint-disable no-unused-vars */
import {
    ButtonHTMLAttributes, FC, forwardRef, LegacyRef, ReactNode,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';
type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: ButtonVariant,
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean,
    children?: ReactNode,
}

/**
 * Своя кнопочка, поддерживает ref
 */
export const Button: FC<ButtonProps> = (
    props: ButtonProps,
    // ref: LegacyRef<HTMLButtonElement>,
) => {
    const {
        className,
        variant = 'outline',
        children,
        square,
        size = 'size_m',
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabledBtn]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                mods,
                [className, cls[variant], cls[size]],
            )}
            disabled={disabled}
            // ref={ref}
            {...otherProps}
        >
            {children}
        </button>
    );
};
