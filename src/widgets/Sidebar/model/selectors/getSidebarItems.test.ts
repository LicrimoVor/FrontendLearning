import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { userTest } from '@/entities/User/model/test/data';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { getSidebarItems } from './getSidebarItems';

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
                    path: RoutePath.main,
                    text: 'Main',
                    Icon: MainIcon,
                },
                {
                    path: RoutePath.about,
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
                    path: RoutePath.main,
                    text: 'Main',
                    Icon: MainIcon,
                },
                {
                    path: RoutePath.about,
                    text: 'About',
                    Icon: AboutIcon,
                },
                {
                    path: RoutePath.profile + userTest.id,
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            ],
        );
    });
});
