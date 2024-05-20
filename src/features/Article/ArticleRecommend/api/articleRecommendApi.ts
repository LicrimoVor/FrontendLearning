import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const articleRecommendApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendList: builder.query<Article[], number>({
            query: (limit: number = 5) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const useArticleRecommendList = articleRecommendApi.useGetArticleRecommendListQuery;
