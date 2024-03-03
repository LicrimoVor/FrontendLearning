import { FC, memo } from 'react';
import { ArticlePageInfinity } from '../ArticlePageInfinity/ArticlePageInfinity';

/** Старница списка статей */
const ArticlePage: FC = () => (
    <ArticlePageInfinity />
);
export default memo(ArticlePage);
