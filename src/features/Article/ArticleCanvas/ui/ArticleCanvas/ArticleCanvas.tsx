import { FC, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Canvas } from '@/shared/ui/redesigned/Canvas';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/userInitialEffect';
import { Coordinate, NodeType } from '@/shared/types/canvas';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { ArticleNode, ArticleNodeSize, IArticleNode } from '@/entities/Article';

import { articleCanvasActions, articleCanvasReducer, getArticles } from '../../model/slice/articleCanvasSlice';
import {
    getArticleCanvasCoordLastNode,
    getArticleCanvasIsLoading,
    getArticleCanvasOffset,
    getArticleCanvasZoom,
} from '../../model/selectors/articleCanvas';
import { fetchArticleCanvas } from '../../model/services/fetchArticleCanvas';
import { useSetArticleCanvas } from '../../lib/useSetArticleCanvas';
import { ArticleNodeFetch } from '../ArticleNodeFetch/ArticleNodeFetch';
import cls from './ArticleCanvas.module.scss';

interface ArticleCanvasProps {
    className?: string,
}

const reducers: ReducerList = {
    articleCanvas: articleCanvasReducer,
};

/** Бесконечное поле статей */
export const ArticleCanvas: FC <ArticleCanvasProps> = memo((
    props: ArticleCanvasProps,
) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleCanvasIsLoading);
    const zoom = useSelector(getArticleCanvasZoom);
    const offest = useSelector(getArticleCanvasOffset);
    const coordLastNode = useSelector(getArticleCanvasCoordLastNode);
    const articles: IArticleNode[] = useSelector(getArticles.selectAll);

    useInitialEffect(() => {
        dispatch(fetchArticleCanvas());
    });

    const {
        onChangeOffset,
        onChangeZoom,
    } = useSetArticleCanvas();

    const nodes = useMemo<NodeType[]>(() => {
        const _nodes = articles.map<NodeType>((article) => {
            const onChangeCoord = (coord: Coordinate) => {
                dispatch(articleCanvasActions.setCoord(
                    { ...article, coord },
                ));
            };

            return {
                id: article.id,
                coord: article.coord,
                element: <ArticleNode article={article} isLoading={isLoading} />,
                onChangeCoord,
            };
        });

        _nodes[-1] = {
            id: '-1',
            coord: {
                x: (coordLastNode.x + ArticleNodeSize.width / 2) / 2,
                y: coordLastNode.y + ArticleNodeSize.height + 40,
            },
            element: <ArticleNodeFetch />,
            fixed: true,
        };
        return _nodes;
    }, [articles, dispatch, coordLastNode, isLoading]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            {articles.length === 0
                ? <div className={cls.loader}><Loader /></div>
                : (
                    <Canvas
                        className={className}
                        nodes={nodes}
                        zoom={zoom}
                        offset={offest}
                        onChangeOffset={onChangeOffset}
                        onChangeZoom={onChangeZoom}
                    />
                )}
        </DynamicModuleLoader>
    );
});
