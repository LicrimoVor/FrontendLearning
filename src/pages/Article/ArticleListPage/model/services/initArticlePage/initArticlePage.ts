import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { SortOrder } from '@/shared/types/order';
import { ArticleSortField, ArticleType } from '@/entities/Article';

import { getArticlePageInited } from '../../selectors/articleListPage';
import { articleListPageActions } from '../../slice/articleListPageSlice';
import { fetchArticlePageList } from '../fetchArticlePageList/fetchArticlePageList';

/** Асинхронный редюсер для инициализации страницы списка статей */
export const initArticlePage = createAsyncThunk<
    void, URLSearchParams, ThunkConfig<string>
>(
    'page/article/initArticlePage',
    async (searchParams, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const _inited = getArticlePageInited(getState());

        if (!_inited) {
            dispatch(articleListPageActions.setOrder(
                searchParams.get('order') as SortOrder || 'asc',
            ));
            dispatch(articleListPageActions.setSort(
                searchParams.get('sort') as ArticleSortField || ArticleSortField.CREATED,
            ));
            dispatch(articleListPageActions.setSearch(
                searchParams.get('search') ?? '',
            ));
            dispatch(articleListPageActions.setType(
                searchParams.get('type') as ArticleType || ArticleType.All,
            ));

            dispatch(articleListPageActions.initState());
            dispatch(fetchArticlePageList({}));
        }
    },
);
