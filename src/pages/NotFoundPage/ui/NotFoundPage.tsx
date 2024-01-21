import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

/** Страница с ошибкой 404 */
export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { t } = useTranslation('not_found');

    const {
        className,
    } = props;

    return (
        <Page
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            {t('Not found page')}
        </Page>
    );
};
