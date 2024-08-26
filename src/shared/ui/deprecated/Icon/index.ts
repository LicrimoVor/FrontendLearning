import { lazy } from 'react';
import type { IconType } from './ui/Icon';

/** @deprecated */
export const Icon = lazy(() => import('./ui/Icon')) as IconType;
