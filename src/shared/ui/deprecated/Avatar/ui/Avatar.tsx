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
    alt?:string,
    fallabackInverted?: boolean,
}

/**
 * @deprecated
 * Аватар
*/
const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        size = 100,
        alt = 'Avatar',
        fallabackInverted,
    } = props;

    const mods = {

    };

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
                    theme={fallabackInverted ? 'inverted' : 'normal'}
                />
            )}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
};

export default Avatar;
export type AvatarType = typeof Avatar;
