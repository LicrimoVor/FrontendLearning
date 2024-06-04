import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Loader } from '@/shared/ui/redesigned/Loader';

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
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <>
                        <LoaderDeprecated />
                        {t('loading')}
                    </>
                )}
                on={<Loader />}
            />

        </div>
    );
};
