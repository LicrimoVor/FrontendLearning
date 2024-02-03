import { FC, memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ArticlePage.module.scss';
import {
    getArticlePageIndex,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePage';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticleFilter';

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
    const index = useSelector(getArticlePageIndex);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(initArticlePage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    const Header = memo(() => (
        <ArticlePageFilter
            className={cls.header}
        />
    ));

    const setIndex = useCallback((index: number) => {
        dispatch(articlePageActions.setIndex(index));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <div
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleList
                    className={cls.list}
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                    onLoadNextPart={onLoadNextPart}
                    Header={Header}
                    initialArticleIndex={{
                        index,
                        setIndex,
                    }}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlePage);
