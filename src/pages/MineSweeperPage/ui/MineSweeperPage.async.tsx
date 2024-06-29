import { lazy } from 'react';

export const MineSweeperPageAsync = lazy(
    () => import('./MineSweeperPage'),
);
