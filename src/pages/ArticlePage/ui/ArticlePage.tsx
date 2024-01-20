import { ArticleList, ArticleView } from 'entities/Article';
import { articleTest } from 'entities/Article/model/test/data';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

/** Старница списка статей */
const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div
            className={classNames(cls.ArticlePage, {}, [className])}
        >
            <ArticleList
                articles={[articleTest, articleTest, articleTest]}
                view={ArticleView.BIG}
                // isLoading
            />
        </div>
    );
};
export default memo(ArticlePage);
