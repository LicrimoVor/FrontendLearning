import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ArticleView } from '@/entities/Article';

import { fetchArticlePageList } from '../../model/services/fetchArticlePageList/fetchArticlePageList';
import { articleListPageActions } from '../../model/slice/articleListPageSlice';
import { getArticlePageView } from '../../model/selectors/articleListPage';

export const useViewSwitcher = () => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlePageList({ replase: true }));
    }, [dispatch]);

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articleListPageActions.setView(view));
        dispatch(articleListPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return {
        view,
        onViewClick,
    };
};
