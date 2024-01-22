import { FC, memo, useCallback } from 'react';

import { ArticleList, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { Page } from 'widgets/Page';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice';
import cls from './ArticlePage.module.scss';
import {
    getArticlePageIsLoading,
    getArticlePageView,
} from '../model/selectors/articlePage';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../model/services/initArticlePage/initArticlePage';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

/** Старница списка статей */
const ArticlePage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);

    useInitialEffect(() => {
        dispatch(initArticlePage());
    });

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.ArticlePage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSwitcher view={view} onViewClick={onViewClick} />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlePage);
