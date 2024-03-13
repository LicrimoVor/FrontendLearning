import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getRouteMain } from '@/shared/const/route';
import { getUserAuthData } from '@/entities/User';

/** Редиректит, если пользователь не вошел */
export function RequireAuth({ children }: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    return children;
}
