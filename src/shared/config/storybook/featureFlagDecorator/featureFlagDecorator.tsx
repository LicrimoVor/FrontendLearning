import { Decorator, StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

/** Декоратор для изменения фичей */
export const featureFlagDecorator: (features: FeatureFlags) => Decorator = (
    features: FeatureFlags,
) => (Story: StoryFn) => {
    setFeatureFlags(features);

    return (
        <Story />
    );
};
