import { lazy } from 'react';
import type { TextAreaType } from './ui/TextArea';

/** @deprecated */
export const TextArea = lazy(() => import('./ui/TextArea')) as TextAreaType;
