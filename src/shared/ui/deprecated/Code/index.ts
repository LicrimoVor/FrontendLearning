import { lazy } from 'react';
import type { CodeType } from './ui/Code';

/** @deprecated */
export const Code = lazy(() => import('./ui/Code')) as CodeType;
