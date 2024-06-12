import { ReactNode } from 'react';

export type Coordinate = {
    x: number,
    y: number
}

export type NodeType = {
    id: string,
    coord: Coordinate,
    element: ReactNode,
    onChangeCoord?: (coord: Coordinate) => void,
    fixed?: boolean,
}
