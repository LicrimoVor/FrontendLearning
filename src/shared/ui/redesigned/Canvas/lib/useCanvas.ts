import {
    RefObject,
    useCallback, useEffect, useState,
} from 'react';

import { Coordinate } from '@/shared/types/canvas';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

interface UseCanvasProps {
    onChangeOffset?: (offset: Coordinate) => void,
    onChangeZoom?: (zoom: number) => void,
    offset: Coordinate,
    zoom: number,
    canvasRef: RefObject<HTMLDivElement>,
}

export const useCanvas = (props: UseCanvasProps) => {
    const {
        onChangeOffset,
        onChangeZoom,
        offset,
        zoom,
        canvasRef,
    } = props;

    const [offsetCanvas, setOffsetCanvas] = useState(offset);
    const [startPos, setStartPos] = useState<Coordinate>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        setOffsetCanvas(offset);
    }, [setOffsetCanvas, offset]);

    const handleMouseDown = useCallback((ev: React.MouseEvent) => {
        setIsDragging(true);
        setStartPos({
            x: ev.pageX,
            y: ev.pageY,
        });
    }, [setStartPos, setIsDragging]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);

        if (onChangeOffset === undefined) {
            return;
        }
        onChangeOffset(offsetCanvas);
    }, [setIsDragging, onChangeOffset, offsetCanvas]);

    const handleMouseMove = useThrottle((e: React.MouseEvent) => {
        if (!isDragging) {
            return;
        }

        if (e.buttons !== 1) {
            setIsDragging(false);
            return;
        }
        setOffsetCanvas({
            x: offset.x + (e.pageX - startPos.x) / zoom,
            y: offset.y + (e.pageY - startPos.y) / zoom,
        });
    }, 10);

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.ctrlKey) {
            const speedFactor = (e.deltaMode === 1 ? 0.05 : 0.002) * 0.5;

            if (onChangeZoom === undefined) {
                return;
            }
            const pinchDelta = -e.deltaY * speedFactor;
            const newZoom = Math.min(
                1.3,
                Math.max(0.1, zoom * 2 ** pinchDelta),
            );
            onChangeZoom(newZoom);

            if (!canvasRef.current || newZoom === zoom) {
                return;
            }

            const { x: xCanvas, y: yCanvas } = canvasRef.current.getBoundingClientRect();
            const { x: xMouse, y: yMouse } = e;
            const shiftX = xMouse - xCanvas - canvasRef.current.offsetWidth / 2;
            const shiftY = yMouse - yCanvas - canvasRef.current.offsetHeight / 2;
            const coordNow = {
                x: offsetCanvas.x + 5 * shiftX * (zoom - newZoom),
                y: offsetCanvas.y + 5 * shiftY * (zoom - newZoom),
            };
            setOffsetCanvas(coordNow);
            if (onChangeOffset === undefined) {
                return;
            }
            onChangeOffset(coordNow);
        }
    };

    return {
        offsetCanvas,
        handleMouseDown,
        handleMouseUp,
        handleMouseMove,
        handleWheel,
        isDragging,
    };
};
