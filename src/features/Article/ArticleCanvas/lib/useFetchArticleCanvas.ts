import { useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { fetchArticleCanvas } from '../model/services/fetchArticleCanvas';

export const useFetchArticleCanvas = () => {
    const dispatch = useAppDispatch();
    const onFetchArticle = useCallback(() => {
        dispatch(fetchArticleCanvas());
    }, [dispatch]);

    return {
        onFetchArticle,
    };
};
