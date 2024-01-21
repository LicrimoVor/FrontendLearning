import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

import { ThunkConfig } from 'shared/config/reduxConfig/stateShema';
import { getArticlePageLimit } from '../../selectors/articlePage';

interface FetchArticlePageListProps {
    page: number,
    // limit: number
}

/** Асинхронный редюсер для получения списка статей */
export const fetchArticlePageList = createAsyncThunk<
    Article[], FetchArticlePageListProps, ThunkConfig<string>
>(
    'pages/article/fetchArticlePage',
    async (props, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkApi;

        const {
            page = 1,
        } = props;

        const limit = getArticlePageLimit(getState());

        try {
            const respone = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
