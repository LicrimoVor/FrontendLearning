import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

/** Виджет загрузки страницы */
export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <div
            className={classNames(cls.PageLoader, {}, [className])}
        >
            <Loader />
            {t('loading')}
        </div>
    );
};
