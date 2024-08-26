import { lazy } from 'react';
import type { LoaderType } from './ui/Loader';

/** @deprecated */
export const Loader = lazy(() => import('./ui/Loader')) as LoaderType;
