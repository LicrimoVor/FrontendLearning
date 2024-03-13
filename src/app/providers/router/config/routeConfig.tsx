import {
    AppRoutes,
    getRouteMain,
    getRouteAbout,
    getRouteProfile,
    getRouteArticles,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteAdmin,
    getRouteForbidden,
} from '@/shared/const/route';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPages';
import { MainPage } from '@/pages/MainPages';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlePage } from '@/pages/Article/ArticlePage';
import { ArticleDetailPage } from '@/pages/Article/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/Article/ArticleEditPage';
import { AdminPanelPage } from '@/pages/Admin/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { AppRoutesProps } from './types';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAIL]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
