import { FC, memo } from 'react';
import { ArticlePageInfinity } from '../ArticlePageInfinity/ArticlePageInfinity';

/** Старница списка статей */
const ArticlePage: FC = () => (
    <div
        data-testid="ArticlePage"
    >
        <ArticlePageInfinity />
    </div>
);
export default memo(ArticlePage);
