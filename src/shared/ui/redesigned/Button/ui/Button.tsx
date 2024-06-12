/* eslint-disable no-unused-vars */
import {
    ButtonHTMLAttributes, FC, forwardRef, LegacyRef, ReactNode,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';
type ButtonSize = 'm' | 'l' | 'xl';
type ButtonColor = 'normal' | 'success' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: ButtonVariant,
    square?: boolean,
    size?: ButtonSize,
    color?: ButtonColor,
    disabled?: boolean,
    children?: ReactNode,
    addonLeft?: ReactNode,
    addonRight?: ReactNode,
}

/**
 * Своя кнопочка, поддерживает ref
 */
export const Button: FC<ButtonProps> = forwardRef((
    props: ButtonProps,
    ref: LegacyRef<HTMLButtonElement>,
) => {
    const {
        className,
        variant = 'outline',
        children,
        square,
        size = 'size_m',
        disabled,
        addonLeft,
        addonRight,
        color = 'normal',
        draggable = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabledBtn]: disabled,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                mods,
                [className, cls[variant], cls[size], cls[color]],
            )}
            disabled={disabled}
            ref={ref}
            draggable={draggable}
            {...otherProps}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            {children}
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </button>
    );
});
