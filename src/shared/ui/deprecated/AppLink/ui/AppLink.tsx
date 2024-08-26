import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDERY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    inverted?: boolean,
    theme?: AppLinkTheme,
    children?: ReactNode,
    disabled?: boolean,
}

/**
 * @deprecated
 * Ссылочка
 */
const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        inverted = false,
        theme = AppLinkTheme.PRIMARY,
        disabled,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={
                classNames(cls.AppLink, { [cls.inverted]: inverted }, [className, cls[theme]])
            }
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
export type AppLinkType = typeof AppLink;
