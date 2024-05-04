import { FC, ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlag } from './setFeatureFlags';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags,
    off: ReactElement,
    on: ReactElement
}

/** Компанено с фича-флагами */
export const ToggleFeatures: FC<ToggleFeaturesProps> = (
    props: ToggleFeaturesProps,
) => {
    const {
        feature,
        off,
        on,
    } = props;

    if (getFeatureFlag(feature)) return on;
    return off;
};
