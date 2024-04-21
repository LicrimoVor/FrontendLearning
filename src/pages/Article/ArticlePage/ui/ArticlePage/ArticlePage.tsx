import { FC, memo } from 'react';
import { ArticlePageInfinity } from '../ArticlePageInfinity/ArticlePageInfinity';
import cls from './ArticlePage.module.scss';

/** Старница списка статей */
const ArticlePage: FC = () => (
    <div
        className={cls.test}
        data-testid="ArticlePage"
    >
        <ArticlePageInfinity />
    </div>
);
export default memo(ArticlePage);
