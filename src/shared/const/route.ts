export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE_LIST = 'articles',
    ARTICLE_DETAIL = 'article_detail',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_CANVAS = 'article_canvas',
    ADMIN_PANEL = 'admin_panel',
    MINESWEEPER = 'mine_sweeper',
    FORBIDDEN = 'forbidden',
    SETTINGS = 'settings',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticleList = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleCanvas = () => '/articles/canvas';
export const getRouteAdmin = () => '/admin';
export const getRouteMineSweeper = () => '/minesweeper';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';

export const AppPatternPathByRoute: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteArticleList()]: AppRoutes.ARTICLE_LIST,
    [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAIL,
    [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
    [getRouteArticleCanvas()]: AppRoutes.ARTICLE_CANVAS,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteMineSweeper()]: AppRoutes.MINESWEEPER,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
};
