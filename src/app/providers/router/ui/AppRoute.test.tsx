import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/route';
import { userTest } from '@/entities/User/testing';
import { UserRole } from '@/entities/User';

import { AppRouter } from './AppRouter';

describe('AppRouter', () => {
    test('Проверка рендера страницы', async () => {
        componentRender(<AppRouter />, {
            route: [getRouteAbout()],
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Проверка страницы not found', async () => {
        componentRender(<AppRouter />, {
            route: ['/asdwasd'],
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект анонима с профиля', async () => {
        componentRender(<AppRouter />, {
            route: [getRouteProfile('1')],
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Проверка страницы профиля', async () => {
        componentRender(<AppRouter />, {
            route: [getRouteProfile('1')],
            initialState: {
                user: {
                    authData: userTest,
                    _inited: true,
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Проверка редиректа админ панели', async () => {
        componentRender(<AppRouter />, {
            route: [getRouteAdmin()],
            initialState: {
                user: {
                    authData: userTest,
                    _inited: true,
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Проверка админ панели с доступом', async () => {
        componentRender(<AppRouter />, {
            route: [getRouteAdmin()],
            initialState: {
                user: {
                    authData: {
                        ...userTest,
                        roles: [UserRole.ADMIN],
                    },
                    _inited: true,
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
