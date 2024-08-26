import { lazy } from 'react';
import type { AvatarType } from './ui/Avatar';

/** @deprecated */
export const Avatar = lazy(() => import('./ui/Avatar')) as AvatarType;
