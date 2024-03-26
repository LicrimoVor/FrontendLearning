import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import { getRouteForbidden } from '@/shared/const/route';
import { getUserRoles, UserRole } from '@/entities/User';

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
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
}
