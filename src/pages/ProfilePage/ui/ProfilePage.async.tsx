import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise<any>((resolve) => {
        setTimeout(() => resolve(import('./ProfilePage')), 1000);
    }),
);
