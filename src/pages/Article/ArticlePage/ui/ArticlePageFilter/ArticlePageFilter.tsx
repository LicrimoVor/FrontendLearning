import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { SortOrder } from '@/shared/types/order';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { HStack } from '@/shared/ui/Stack';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ArticleViewSwitcher } from '@/features/Article/ArticleViewSwitcher';
import { ArticleSortSelector } from '@/features/Article/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/Article/ArticleTypeTabs';

import { fetchArticlePageList } from '../../model/services/fetchArticlePageList/fetchArticlePageList';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlePage';
import cls from './ArticlePageFilter.module.scss';

interface articlePageFilterProps {
    className?: string,
}

/** Фильтры для списка статей */
export const ArticlePageFilter: FC<articlePageFilterProps> = memo((
    props: articlePageFilterProps,
) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlePageList({ replase: true }));
    }, [dispatch]);
    const debounsedFetchData = useDebounce(fetchData, 500);

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

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

    return (
        <div
            className={classNames('', {}, [className])}
            data-testid="ArticlePageFilter"
        >
            <HStack justify="spaceBetween">
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSwitcher view={view} onViewClick={onViewClick} />
            </HStack>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
