import { EntityState } from '@reduxjs/toolkit';

import { Coordinate } from '@/shared/types/canvas';
import { IArticleNode } from '@/entities/Article';

export interface ArticleCanvasSchema extends EntityState<IArticleNode> {
    isLoading?: boolean,
    error?: string,

    // pagination
    page: number,
    limit: number,
    hasMore: boolean,

    // canvas
    offsent: Coordinate,
    zoom: number,
    coordLastNode: Coordinate,

    _inited: boolean,
}
