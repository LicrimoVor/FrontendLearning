import { FC, memo } from 'react';
import { ArticlePageInfinity } from '../ArticlePageInfinity/ArticlePageInfinity';

interface ArticlePageProps {
    className?: string
}

/** Старница списка статей */
const ArticlePage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    return (
        <ArticlePageInfinity />
    );
};
export default memo(ArticlePage);
