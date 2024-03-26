import { rtkApi } from '@/shared/api/rtkApi';
import { IArticleRating } from '../model/types/article';

interface GetArticleRatingProps {
    userId: string,
    articleId: string,
}

const articleRatingdApi = rtkApi
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

export const useGetArticleRating = articleRatingdApi.useGetArticleRatingQuery;
export const useCreateArticleRating = articleRatingdApi.useCreateArticleRatingMutation;
export const useUpdateArticleRating = articleRatingdApi.useUpdateArticleRatingMutation;
