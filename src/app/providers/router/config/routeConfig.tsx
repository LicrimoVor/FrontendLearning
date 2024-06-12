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
    getRouteSettings,
    getRouteMineSweeper,
    getRouteArticleCanvas,
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
import { SettingsPage } from '@/pages/SettingsPage';
import { MineSweeperPage } from '@/pages/MineSweeperPage';
import { ArticleCanvasPage } from '@/pages/Article/ArticleCanvasPage';

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
    [AppRoutes.ARTICLE_CANVAS]: {
        path: getRouteArticleCanvas(),
        element: <ArticleCanvasPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.MINESWEEPER]: {
        path: getRouteMineSweeper(),
        element: <MineSweeperPage />,
        authOnly: true,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
        authOnly: true,
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
