import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendList: builder.query<Article[], number>({
            query: (limit: number = 5) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticleRecommendList = articleRecommendApi.useGetArticleRecommendListQuery;
