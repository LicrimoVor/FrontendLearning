import { createSelector } from '@reduxjs/toolkit';

import {
    getRouteAbout,
    getRouteArticleList,
    getRouteMain,
    getRouteMineSweeper,
    getRouteProfile,
} from '@/shared/const/route';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about_redesigned.svg';
import ProfileIcon from '@/shared/assets/icons/user_redesigned.svg';
import ArticlesIcon from '@/shared/assets/icons/articles_redesigned.svg';
import MinesweeperIcon from '@/shared/assets/icons/minesweeper.svg';
import { getUserAuthData } from '@/entities/User';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData!.id),
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticleList(),
                    text: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            );
        }
        sidebarItemsList.push({
            path: getRouteMineSweeper(),
            text: 'Minesweeper',
            Icon: MinesweeperIcon,
        });

        return sidebarItemsList;
    },
);
