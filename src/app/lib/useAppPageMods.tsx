import { AppRoutes } from '@/shared/const/route';
import { useAppRouteGet } from '@/shared/lib/url/useAppRouteGet';
import { PageMods } from '@/shared/layouts/MainLayout';

const AppPageMods: OptionalRecord<AppRoutes, PageMods> = {
    [AppRoutes.ARTICLE_CANVAS]: { maxContentWidth: true },
};

export const useAppPageMods = () => {
    const appRoute = useAppRouteGet();
    return AppPageMods[appRoute];
};
