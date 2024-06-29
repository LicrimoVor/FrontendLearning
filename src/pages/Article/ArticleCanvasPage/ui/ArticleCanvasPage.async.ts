import { lazy } from 'react';

export const ArticleCanvasPageAsync = lazy(
    () => import('./ArticleCanvasPage'),
);
