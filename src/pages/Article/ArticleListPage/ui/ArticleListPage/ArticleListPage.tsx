import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { MetaData } from '@/shared/lib/components/MetaData';
import { Page } from '@/widgets/Page';

import { ArticlePageInfinity } from '../ArticleInfinity/ArticleInfinity';

/** Страница списка статей */
const ArticleListPage: FC = () => {
    const { t } = useTranslation('article');

    return (
        <Page
            data-testid="ArticlePage"
            scrollInit={false}
        >
            <MetaData title={t('Article list')} description={t('PET-project. Displaying a list of articles')} />
            <ArticlePageInfinity />
        </Page>
    );
};
export default memo(ArticleListPage);
