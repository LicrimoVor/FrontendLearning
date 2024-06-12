import {
    FC, memo, useRef, useEffect,
} from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Coordinate, NodeType } from '@/shared/types/canvas';

import { Node } from '../../Node';
import { useCanvas } from '../lib/useCanvas';
import { ScopeAction } from '../../ScopeAction';
import cls from './Canvas.module.scss';

interface CanvasProps {
    className?: string,
    offset?: Coordinate,
    zoom?: number,
    onChangeOffset?: (offset: Coordinate) => void,
    onChangeZoom?: (zoom: number) => void,
    nodes?: NodeType[],
}

/** Бесконечное поле */
export const Canvas: FC <CanvasProps> = memo((
    props: CanvasProps,
) => {
    const {
        className,
        offset = {
            x: 0,
            y: 0,
        },
        zoom = 1,
        onChangeOffset,
        onChangeZoom,
        nodes,
    } = props;

    const canvasRef = useRef<HTMLDivElement>(null);

    const {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleWheel,
        offsetCanvas,
        isDragging,
    } = useCanvas({
        offset, zoom, onChangeOffset, canvasRef, onChangeZoom,
    });

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        canvasRef.current.onwheel = handleWheel;
    }, [onChangeZoom, zoom, handleWheel]);

    return (
        <div
            className={classNames(cls.Canvas, {}, [className])}
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {isDragging && <ScopeAction />}
            <div
                className={cls.container}
                style={{
                    transform: `translate(${(offsetCanvas.x) * zoom}px, ${
                        (offsetCanvas.y) * zoom
                    }px) scale(${zoom})`,
                }}
            >
                {nodes && Object.values(nodes).map((node) => (
                    <Node
                        canvasRef={canvasRef}
                        zoom={zoom}
                        key={node.id}
                        coord={node.coord}
                        onChangeCoord={node.onChangeCoord}
                        element={node.element}
                        fixed={node.fixed}
                    />
                ))}
            </div>

        </div>
    );
});
