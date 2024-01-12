import { FC, FunctionComponent, SVGAttributes } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string,
    Svg: FunctionComponent<SVGAttributes<SVGElement>>,
}

/** Докстринг */
export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg,
    } = props;

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
        />
    );
};
