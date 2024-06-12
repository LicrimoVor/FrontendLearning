import { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import UserIcon from '@/shared/assets/icons/user.svg';

import { AppImage } from '../../../redesigned/AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?: string,
    draggable?: boolean,
}

/**
 * Аватар
*/
export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        size = 100,
        alt = 'Avatar',
        draggable,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <AppImage
            fallback={<Skeleton width={size} height={size} border="50%" />}
            errorFallback={(
                <Icon
                    Svg={UserIcon}
                    size={size}
                />
            )}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
            draggable={draggable}
        />
    );
};
