import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultIsAppRedesigned = localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) || 'new';

const defaultFeatures = {
    isAppRedesigned: defaultIsAppRedesigned === 'new',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatures,
};

// Фича-флаги в ходе сессии не меняются!
export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlag() {
    return featureFlags;
}
