import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { AppPatternPathByRoute, AppRoutes } from '@/shared/const/route';

export const useAppRouteGet = () => {
    const location = useLocation();
    const [route, setRoute] = useState<AppRoutes>(AppRoutes.MAIN);

    useEffect(() => {
        Object.entries(AppPatternPathByRoute).forEach(([pattern, route]) => {
            if (matchPath(pattern, location.pathname)) {
                setRoute(route);
            }
        });
    }, [location.pathname]);

    return route;
};
