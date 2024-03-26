import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getArticleCanEdit = createSelector(
    getArticleDetailData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
