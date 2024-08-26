import { lazy } from 'react';
import type { AppLinkType } from './ui/AppLink';

export { AppLinkTheme } from './ui/AppLink';

/** @deprecated */
export const AppLink = lazy(() => import('./ui/AppLink')) as AppLinkType;
