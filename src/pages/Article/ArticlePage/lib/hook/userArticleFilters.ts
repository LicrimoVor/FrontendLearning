import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { SortOrder } from '@/shared/types/order';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ArticleSortField, ArticleType } from '@/entities/Article';

import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from '../../model/selectors/articlePage';
import { fetchArticlePageList } from '../../model/services/fetchArticlePageList/fetchArticlePageList';
import { articlePageActions } from '../../model/slice/articlePageSlice';

export const useArticleFilters = () => {
    const dispatch = useAppDispatch();
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlePageList({ replase: true }));
    }, [dispatch]);
    const debounsedFetchData = useDebounce(fetchData, 500);
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlePageActions.setSearch(newSearch));
        dispatch(articlePageActions.setPage(1));
        debounsedFetchData();
    }, [dispatch, debounsedFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageActions.setType(value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    };
};
