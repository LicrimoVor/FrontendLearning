import { FC, ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlag } from '../lib/setFeatureFlags';
import { typedMemo } from '../../typedMemo';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags,
    off: ReactElement | null,
    on: ReactElement | null
}

/** Компонент с фича-флагами */
export const ToggleFeatures: FC<ToggleFeaturesProps> = typedMemo((
    props: ToggleFeaturesProps,
) => {
    const {
        feature,
        off,
        on,
    } = props;

    if (getFeatureFlag(feature)) return on;
    return off;
});
