import { lazy } from 'react';
import type { ButtonType } from './ui/Button';

export { ButtonSize, ButtonTheme } from './ui/Button';

/** @deprecated */
export const Button = lazy(() => import('./ui/Button')) as ButtonType;
