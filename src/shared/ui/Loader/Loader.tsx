import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

/** Пакмен загрузка */
export const Loader: FC<LoaderProps> = memo((props: LoaderProps) => {
    const {
        className,
    } = props;

    return <div className={classNames(cls.Loader, {}, [className])} />;
});
