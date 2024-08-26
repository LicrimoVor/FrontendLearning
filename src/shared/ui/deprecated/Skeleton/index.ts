import { lazy } from 'react';
import type { SkeletonType } from './ui/Skeleton';

/** @deprecated */
export const Skeleton = lazy(() => import('./ui/Skeleton')) as SkeletonType;
