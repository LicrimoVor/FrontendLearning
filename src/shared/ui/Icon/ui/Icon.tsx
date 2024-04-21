import {
    FC, FunctionComponent, memo, SVGAttributes,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type IconTheme = 'inverted' | 'normal' | 'clear';

interface IconProps {
    className?: string,
    Svg: FunctionComponent<SVGAttributes<SVGElement>>,
    theme?: IconTheme,
    size?: string | number,
}

const themeClass: Record<IconTheme, string> = {
    clear: cls.clear,
    inverted: cls.inverted,
    normal: cls.normal,
};

/** Иконка */
export const Icon: FC<IconProps> = memo((props: IconProps) => {
    const {
        className,
        Svg,
        size,
        theme = 'normal',
        ...otherProps
    } = props;

    return (
        <Svg
            style={{
                height: size,
                width: size,
            }}
            className={classNames('', {}, [className, themeClass[theme]])}
            {...otherProps}
        />
    );
});
