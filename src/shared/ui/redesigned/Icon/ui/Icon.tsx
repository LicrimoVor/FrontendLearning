import {
    FunctionComponent, memo, SVGAttributes, SVGProps,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBasicProps extends SvgProps {
    className?: string,
    Svg: FunctionComponent<SVGAttributes<SVGElement>>,
    size?: string | number,
}

interface NonClickableProps extends IconBasicProps {
    clickable?: false,
}

interface ClickableProps extends IconBasicProps {
    clickable: true,
    onClick: () => void
}

type IconProps = NonClickableProps | ClickableProps;

/**
 * Иконка
 */
export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        size,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            style={{
                height: size,
                width: size,
            }}
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
            onClick={undefined}
        />
    );
    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
            >
                {icon}
            </button>
        );
    }

    return icon;
});