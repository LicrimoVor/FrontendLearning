import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsProps {
    features: Partial<FeatureFlags>,
    userId: string,
}

const featureApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        updateFeatureFlags: builder.mutation<void, UpdateFeatureFlagsProps>({
            query: ({ features, userId }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation = featureApi.endpoints.updateFeatureFlags.initiate;
