import { rtkApi } from '@/shared/api/rtkApi';
import { IArticleRating } from '../model/types/article';

interface GetArticleRatingProps {
    userId: string,
    articleId: string,
}

const articleRecommendApi = rtkApi
    .enhanceEndpoints({
        addTagTypes: ['ArticleRating'],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getArticleRating: builder.query<IArticleRating, GetArticleRatingProps>({
                query: ({ articleId, userId }) => ({
                    url: '/article-ratings',
                    params: {
                        userId,
                        articleId,
                    },
                }),
                providesTags: ['ArticleRating'],
                transformResponse: (response: IArticleRating[]) => response[0],
            }),
            createArticleRating: builder.mutation<IArticleRating, IArticleRating>({
                query: (data) => ({
                    url: '/article-ratings',
                    method: 'POST',
                    body: data,
                }),
                invalidatesTags: ['ArticleRating'],
            }),
            updateArticleRating: builder.mutation<IArticleRating, IArticleRating>({
                query: (data) => ({
                    url: `/article-ratings/${data.id}`,
                    method: 'PATCH',
                    body: data,
                }),
                invalidatesTags: ['ArticleRating'],
            }),
        }),
    });

export const useGetArticleRating = articleRecommendApi.useGetArticleRatingQuery;
export const useCreateArticleRating = articleRecommendApi.useCreateArticleRatingMutation;
export const useUpdateArticleRating = articleRecommendApi.useUpdateArticleRatingMutation;
