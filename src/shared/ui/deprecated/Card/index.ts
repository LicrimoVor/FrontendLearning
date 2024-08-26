import { lazy } from 'react';
import type { CardType } from './ui/Card';

export { CardTheme } from './ui/Card';

/** @deprecated */
export const Card = lazy(() => import('./ui/Card')) as CardType;
