import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/roles';

export interface User {
    id: string,
    username: string,
    avatar?: string,
    roles?: UserRole[],
    features?: FeatureFlags
}

export interface UserSchema {
    authData?: User,
    _inited: boolean,
}
