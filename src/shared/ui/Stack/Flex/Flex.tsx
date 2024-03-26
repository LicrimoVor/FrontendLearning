import { FC, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLTags } from '@/shared/types/tags';
import cls from './Flex.module.scss';

type FlexJustifyType = 'center' | 'end' | 'start' | 'spaceBetween';
type FlexAlignType = 'center' | 'end' | 'start' | 'baseline';
type FlexGapType = 4 | 8 | 12 | 16 | 32;
type FlexDirectionType = 'row' | 'column'

export interface FlexProps {
    className?: string,
    children: ReactNode,
    justify?: FlexJustifyType,
    align?: FlexAlignType,
    gap?: FlexGapType,
    max?: boolean,
    direction?: FlexDirectionType,
    Component?: HTMLTags,
}

const FlexJustify: Record<FlexJustifyType, string> = {
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    start: cls.justifyStart,
    spaceBetween: cls.justifySpaceBetween,
};

const FlexAlign: Record<FlexAlignType, string> = {
    center: cls.alignCenter,
    end: cls.alignEnd,
    start: cls.alignStart,
    baseline: cls.alignBaseline,
};

const FlexGap: Record<FlexGapType, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    32: cls.gap32,
};

const FlexDirection: Record<FlexDirectionType, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

/** Компонент позиционирования flex */
export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        Component = 'div',
    } = props;

    const classes = [
        className,
        FlexJustify[justify],
        FlexAlign[align],
        FlexDirection[direction],
        gap && FlexGap[gap],
    ];

    const mods = {
        [cls.maxWidth]: max,
    };

    return (
        <Component
            className={classNames(cls.Flex, mods, classes)}
        >
            {children}
        </Component>
    );
};
