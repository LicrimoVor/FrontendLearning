import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/shared/config/reduxConfig/stateShema';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { updateFeatureFlagsMutation } from '../api/feauteFlagsApi';
import { getAllFeatureFlag } from '../lib/setFeatureFlags';

interface updateFeatureFlagsProps {
    userId: string,
    newFeatures: Partial<FeatureFlags>
}

/** Асинхронный редюсер для сохранения фича-флага */
export const updateFeatureFlags = createAsyncThunk<
    void, updateFeatureFlagsProps, ThunkConfig<string>
>(
    'user/settings/updateFeatureFlags',
    async ({ userId, newFeatures }, thunkApi) => {
        const {
            dispatch,
            rejectWithValue,
        } = thunkApi;

        try {
            await dispatch(
                updateFeatureFlagsMutation({
                    userId,
                    features: { ...getAllFeatureFlag(), ...newFeatures },
                }),
            );

            window.location.reload();
        } catch {
            rejectWithValue('error');
        }
    },
);
