import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import { Article, ArticleType } from '@/entities/Article';

import {
    getArticlePageLimit,
    getArticlePageOrder,
    getArticlePagePage,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from '../../selectors/articlePage';

interface FetchArticlePageListProps {
    replase?: boolean,
}

/** Асинхронный редюсер для получения списка статей */
export const fetchArticlePageList = createAsyncThunk<
    Article[], FetchArticlePageListProps, ThunkConfig<string>
>(
    'pages/article/fetchArticlePage',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const limit = getArticlePageLimit(getState());
        const order = getArticlePageOrder(getState());
        const sort = getArticlePageSort(getState());
        const search = getArticlePageSearch(getState());
        const page = getArticlePagePage(getState());
        const type = getArticlePageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const respone = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.All ? undefined : type,
                },
            });
            if (!respone.data) {
                throw new Error();
            }

            return respone.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
