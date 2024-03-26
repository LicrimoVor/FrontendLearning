import { lazy } from 'react';

export const ArticleRecommendAsync = lazy(
    () => import('./ArticleRecommend'),
);
