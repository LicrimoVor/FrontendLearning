import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { MetaData } from '@/shared/lib/components/MetaData';
import { ArticleCanvas } from '@/features/Article/ArticleCanvas';
import { Page } from '@/widgets/Page';

/** Страница с бесконечным полем статей */
const ArticleCanvasPage: FC = () => {
    const { t } = useTranslation('article');

    return (
        <Page>
            <MetaData title={t('Article сanvas')} description={t('PET-project. Canvas for displaying articles')} />
            <ArticleCanvas />
        </Page>
    );
};

export default memo(ArticleCanvasPage);
