import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    () => new Promise<any>((resolve) => {
        setTimeout(() => resolve(import('./ArticleEditPage')), 1000);
    }),
);
