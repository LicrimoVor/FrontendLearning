import { FC, memo } from 'react';

import { Page } from '@/widgets/Page';

import { ArticlePageInfinity } from '../ArticlePageInfinity/ArticlePageInfinity';

/** Старница списка статей */
const ArticlePage: FC = () => (
    <Page
        data-testid="ArticlePage"
        scrollInit={false}
    >
        <ArticlePageInfinity />
    </Page>
);
export default memo(ArticlePage);
