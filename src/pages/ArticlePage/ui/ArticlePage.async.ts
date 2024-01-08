import { lazy } from 'react';

export const ArticlePageAsync = lazy(
    () => new Promise<any>((resolve) => {
        setTimeout(() => resolve(import('./ArticlePage')), 1000);
    }),
);
