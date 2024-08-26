import { FC, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { ToggleFeatures } from '@/shared/lib/features';

import { articleListPageReducer, articleListPageActions, getArticles } from '../../model/slice/articleListPageSlice';
import {
    getArticlePageHasMore,
    getArticlePageIndex,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articleListPage';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { DeprecatedArticleInfinity } from './ArticleInfinityDep';
import { RedesignedArticleInfinity } from './ArticleInfinityRed';

interface ArticlePageInfinityProps {
    className?: string
}

const reducers: ReducerList = {
    articleListPage: articleListPageReducer,
};

/** Бесконечный список статей с фильтрами */
export const ArticlePageInfinity: FC<ArticlePageInfinityProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const index = useSelector(getArticlePageIndex);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const hasMore = useSelector(getArticlePageHasMore);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(initArticlePage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    const setIndex = useCallback((index: number) => {
        dispatch(articleListPageActions.setIndex(index));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <DeprecatedArticleInfinity
                        isLoading={isLoading}
                        hasMore={hasMore}
                        setIndex={setIndex}
                        onLoadNextPart={onLoadNextPart}
                        articles={articles}
                        index={index || 0}
                        view={view}
                        className={className}
                    />
                )}
                on={(
                    <RedesignedArticleInfinity
                        isLoading={isLoading}
                        hasMore={hasMore}
                        setIndex={setIndex}
                        onLoadNextPart={onLoadNextPart}
                        articles={articles}
                        index={index}
                        view={view}
                        className={className}
                    />
                )}

            />
        </DynamicModuleLoader>
    );
};
