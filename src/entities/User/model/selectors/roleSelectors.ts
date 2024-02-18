import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from 'shared/config/reduxConfig/stateShema';
import { UserRole } from '../consts/roles';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => (roles?.includes(UserRole.ADMIN)),
);

export const isUserManager = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
);

export const isUserUser = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.USER)),
);
