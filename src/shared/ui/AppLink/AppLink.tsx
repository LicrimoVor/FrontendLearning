import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDERY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  inverted?: boolean,
  theme?: AppLinkTheme,
}

/** Ссылочка */
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        inverted = false,
        theme = AppLinkTheme.PRIMARY,
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
};
