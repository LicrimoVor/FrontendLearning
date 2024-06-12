import { useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Coordinate } from '@/shared/types/canvas';

import { articleCanvasActions } from '../model/slice/articleCanvasSlice';

export const useSetArticleCanvas = () => {
    const dispatch = useAppDispatch();

    const onChangeOffset = useCallback((coord: Coordinate) => {
        dispatch(articleCanvasActions.setOffset(coord));
    }, [dispatch]);
    const onChangeZoom = useCallback((zoom: number) => {
        dispatch(articleCanvasActions.setZoom(zoom));
    }, [dispatch]);

    return {
        onChangeOffset,
        onChangeZoom,
    };
};
