import { FC, HTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './ScopeAction.module.scss';

interface ScopeActionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
}

/** Область действия на всю страницу */
export const ScopeAction: FC <ScopeActionProps> = memo((
    props: ScopeActionProps,
) => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.ScopeAction, {}, [className])}
            {...otherProps}
        />
    );
});
