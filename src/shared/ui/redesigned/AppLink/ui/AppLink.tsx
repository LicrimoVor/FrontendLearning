import { LinkProps, NavLink } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './AppLink.module.scss';

type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string,
    variant?: AppLinkVariant,
    children?: ReactNode,
    disabled?: boolean,
    activeClassname?: string
}

/**
 * Ссылочка
 */
export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        variant = 'primary',
        disabled,
        activeClassname = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) => classNames(
                cls.AppLink,
                { [activeClassname]: isActive },
                [className, cls[variant]],
            )}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
