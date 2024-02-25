import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface CheckRolesProps {
    children: JSX.Element,
    roles?: UserRole[],
}

/** Редиректит, если у пользователя недостаточно прав */
export function CheckRoles({ children, roles }: CheckRolesProps) {
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    const hasRole = useMemo(() => {
        if (!roles) {
            return true;
        }

        return userRoles?.some((userRole) => roles.includes(userRole));
    }, [roles, userRoles]);

    if (!hasRole) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
