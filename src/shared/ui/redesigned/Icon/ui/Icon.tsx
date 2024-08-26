import {
    FunctionComponent, memo, SVGAttributes, SVGProps,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink } from '../../AppLink';
import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick' | 'key' | 'href'>;

interface IconBasicProps extends SvgProps {
    className?: string,
    Svg: FunctionComponent<SVGAttributes<SVGElement>>,
    size?: string | number,
    keyId?: string | number,
}

interface NonClickableProps extends IconBasicProps {
    clickable?: false,
}

interface ClickableProps extends IconBasicProps {
    clickable: true,
    onClick?: () => void,
    'aria-labelledby': string,
    'aria-label'?: string,
    href?: string,
}

type IconProps = NonClickableProps | ClickableProps;

/**
 * Иконка
 */
export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        size = 16,
        height,
        width,
        clickable,
        keyId,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            style={{
                height: height || size,
                width: width || size,
            }}
            className={classNames(cls.Icon, {}, [className])}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        if (props.href !== undefined) {
            return (
                <AppLink
                    className={cls.clickable}
                    to={props.href}
                    key={keyId}
                    ariaLabel={props['aria-labelledby']}
                    draggable={false}
                >
                    {icon}
                </AppLink>
            );
        }

        return (
            <button
                type="button"
                className={cls.clickable}
                onClick={props.onClick}
                draggable={false}
                aria-labelledby={props['aria-labelledby']}
                aria-label={props['aria-label'] || props['aria-labelledby']}
                key={keyId}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
