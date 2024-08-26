import { lazy } from 'react';
import type { SelectType } from './ui/Select';

export type { SelectOption } from './model/types/option';

/** @deprecated */
export const Select = lazy(() => import('./ui/Select')) as SelectType;
