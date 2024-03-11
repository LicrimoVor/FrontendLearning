import { rtkApi } from '@/shared/api/rtkApi';
import { IProfileRating } from '../model/types/profile';

interface GetProfileRatingProps {
    userId: string,
    profileId: string,
}

const profileRatingApi = rtkApi
    .enhanceEndpoints({
        addTagTypes: ['ProfileRating'],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getProfileRating: builder.query<IProfileRating, GetProfileRatingProps>({
                query: ({ profileId, userId }) => ({
                    url: '/profile-ratings',
                    params: {
                        userId,
                        profileId,
                    },
                }),
                providesTags: ['ProfileRating'],
                transformResponse: (response: IProfileRating[]) => response[0],
            }),
            createProfileRating: builder.mutation<IProfileRating, IProfileRating>({
                query: (data) => ({
                    url: '/profile-ratings',
                    method: 'POST',
                    body: data,
                }),
                invalidatesTags: ['ProfileRating'],
            }),
            updateProfileRating: builder.mutation<IProfileRating, IProfileRating>({
                query: (data) => ({
                    url: `/profile-ratings/${data.id}`,
                    method: 'PATCH',
                    body: data,
                }),
                invalidatesTags: ['ProfileRating'],
            }),
        }),
    });

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useCreateProfileRating = profileRatingApi.useCreateProfileRatingMutation;
export const useUpdateProfileRating = profileRatingApi.useUpdateProfileRatingMutation;
