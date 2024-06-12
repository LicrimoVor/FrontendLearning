import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/route';
import { useAppRouteGet } from '@/shared/lib/url/useAppRouteGet';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { ArticleCanvasToolbar } from '@/widgets/ArticleCanvasToolbar';

const AppToolbarByRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAIL]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_CANVAS]: <ArticleCanvasToolbar />,
};

export const useAppToolBar = () => {
    const appRoute = useAppRouteGet();
    return AppToolbarByRoute[appRoute];
};
