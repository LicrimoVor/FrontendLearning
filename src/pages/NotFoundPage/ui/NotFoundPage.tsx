import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

/** Страница с ошибкой 404 */
export const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page
            className={cls.NotFoundPage}
            data-testid="NotFoundPage"
        >
            {t('Not found page')}
        </Page>
    );
};
