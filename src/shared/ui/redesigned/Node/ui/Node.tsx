import {
    FC, memo, RefObject, useCallback, useEffect, useRef, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Coordinate, NodeType } from '@/shared/types/canvas';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

import cls from './Node.module.scss';

interface NodeProps extends Omit<NodeType, 'id'> {
    className?: string,
    zoom: number,
    canvasRef: RefObject<HTMLDivElement>,
}

/** Node в канвасе */
export const Node: FC <NodeProps> = memo((
    props: NodeProps,
) => {
    const {
        className,
        zoom,
        coord,
        element,
        canvasRef,
        fixed = false,
        onChangeCoord,
    } = props;

    const nodeRef = useRef<HTMLDivElement>(null);
    const [coordNode, setCoordNode] = useState(coord);
    const [isDrag, setIsDrag] = useState(false);
    const [startPos, setStartPos] = useState<Coordinate>({ x: 0, y: 0 });

    useEffect(() => {
        setCoordNode(coord);
    }, [coord, setCoordNode]);

    const onDrag = useThrottle((e: React.MouseEvent) => {
        if (!isDrag) {
            return;
        }
        if (e.buttons !== 1) {
            setIsDrag(false);
            return;
        }

        setCoordNode({
            x: coord.x + (e.pageX - startPos.x) / zoom,
            y: coord.y + (e.pageY - startPos.y) / zoom,
        });
    }, 15);

    const onDragEnd = useCallback(() => {
        setIsDrag(false);

        if (onChangeCoord === undefined) {
            return;
        }

        onChangeCoord(coordNode);
    }, [setIsDrag, onChangeCoord, coordNode]);

    useEffect(() => {
        if (!isDrag || fixed) return undefined;

        if (!canvasRef.current) return undefined;
        canvasRef.current.addEventListener('mousemove', onDrag);
        canvasRef.current.addEventListener('mouseup', onDragEnd);

        return () => {
            if (!isDrag) return;
            if (!canvasRef.current) return;

            // eslint-disable-next-line react-hooks/exhaustive-deps
            canvasRef.current.removeEventListener('mousemove', onDrag);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            canvasRef.current.removeEventListener('mouseup', onDragEnd);
        };
    }, [isDrag, canvasRef, onDrag, onDragEnd, fixed]);

    const onDragStart = useCallback((ev: React.MouseEvent) => {
        ev.stopPropagation();
        if (fixed) {
            return;
        }
        setIsDrag(true);
        setStartPos({
            x: ev.pageX,
            y: ev.pageY,
        });
    }, [setIsDrag, fixed]);

    return (
        <div
            ref={nodeRef}
            className={classNames(cls.Node, { [cls.fixed]: fixed }, [className])}
            style={{ top: `${coordNode.y}px`, left: `${coordNode.x}px` }}
            onMouseDown={onDragStart}
            onMouseUp={fixed ? undefined : onDragEnd}
            onMouseMove={fixed ? undefined : onDrag}
        >
            {element}
        </div>
    );
});
