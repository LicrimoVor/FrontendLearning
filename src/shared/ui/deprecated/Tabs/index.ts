import { lazy } from 'react';
import type { TabsType } from './ui/Tabs';

export type { TabItem } from './model/types/item';

/** @deprecated */
export const Tabs = lazy(() => import('./ui/Tabs')) as TabsType;
