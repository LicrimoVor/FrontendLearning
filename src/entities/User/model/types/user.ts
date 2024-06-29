import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/roles';
import { JsonSettings } from './settings';

export interface User {
    id: string,
    username: string,
    avatar?: string,
    roles?: UserRole[],
    features?: FeatureFlags,
    jsonSettings?: JsonSettings,
}

export interface UserSchema {
    authData?: User,
    _isOnline: boolean,
    _inited: boolean,
}
