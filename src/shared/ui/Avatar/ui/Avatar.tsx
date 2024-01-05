import { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?:string,
}

/** Аватар */
export const Avatar: FC<AvatarProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
        src,
        size = 100,
        alt = 'Avatar',
    } = props;

    const mods = {

    };

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={t(alt)}
        />
    );
};
