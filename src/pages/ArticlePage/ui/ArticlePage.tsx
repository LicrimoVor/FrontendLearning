import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice';
import cls from './ArticlePage.module.scss';
import { fetchArticlePage } from '../model/services/fetchArticlePage';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../model/selectors/articlePage';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

/** Старница списка статей */
const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    useInitialEffect(() => {
        dispatch(fetchArticlePage());
        dispatch(articlePageActions.initState());
    });

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const {
        className,
    } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSwitcher view={view} onViewClick={onViewClick} />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlePage);
