import { lazy } from 'react';
import type { InputType } from './ui/Input';

/** @deprecated */
export const Input = lazy(() => import('./ui/Input')) as InputType;
