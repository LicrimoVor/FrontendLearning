import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/route';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { userTest } from '@/entities/User/testing';

import { getSidebarItems } from './getSidebarItemsDep';

describe('getSidebarItems', () => {
    test('Test get items notAuth ', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: undefined,
                _inited: true,
            },
        };
        expect(getSidebarItems(state as StateSchema)).toEqual(
            [
                {
                    path: getRouteMain(),
                    text: 'Main',
                    Icon: MainIcon,
                },
                {
                    path: getRouteAbout(),
                    text: 'About',
                    Icon: AboutIcon,
                },
            ],
        );
    });

    test('Test get items authData ', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: userTest,
                _inited: true,
            },
        };
        expect(getSidebarItems(state as StateSchema)).toEqual(
            [
                {
                    path: getRouteMain(),
                    text: 'Main',
                    Icon: MainIcon,
                },
                {
                    path: getRouteAbout(),
                    text: 'About',
                    Icon: AboutIcon,
                },
                {
                    path: getRouteProfile(userTest.id),
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            ],
        );
    });
});
