import {
    FC, FunctionComponent, memo, SVGAttributes, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string,
    Svg: FunctionComponent<SVGAttributes<SVGElement>>,
    inverted?: boolean,
}

/** Иконка */
export const Icon: FC<IconProps> = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
    } = props;

    const mods = useMemo(() => ({
        [cls.inverted]: inverted,
    }), [inverted]);

    return (
        <Svg
            className={classNames(cls.Icon, mods, [className])}
        />
    );
});
