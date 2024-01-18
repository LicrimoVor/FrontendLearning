import { lazy } from 'react';

export const ArticleDetailPageAsync = lazy(
    () => new Promise<any>((resolve) => {
        setTimeout(() => resolve(import('./ArticleDetailPage')), 1000);
    }),
);
