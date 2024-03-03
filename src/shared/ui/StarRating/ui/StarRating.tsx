import {
    FC, memo, useCallback, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarSVG from '@/shared/assets/icons/star.svg';
import { Icon } from '../../Icon';
import { Button, ButtonTheme } from '../../Button/Button';

interface StarRatingProps {
    className?: string,
    onChange?: (val: number) => void,
    value?: number,
    size?: number | string,
}

const STARS = [1, 2, 3, 4, 5];

/** Рейтинг звездочками */
export const StarRating: FC<StarRatingProps> = memo((props: StarRatingProps) => {
    const {
        className,
        onChange,
        value,
        size,
    } = props;

    const [hoverId, setHoverId] = useState(0);

    const onHoverStar = useCallback((starId: number) => () => {
        setHoverId(starId);
    }, []);

    const onLeaveStar = useCallback(() => {
        setHoverId(0);
    }, []);

    const onSelectStar = useCallback((starId: number) => () => {
        if (onChange) {
            onChange(starId);
        }
    }, [onChange]);

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {STARS.map((starId) => {
                const mods = {
                    [cls.selected]: value ? starId <= value : false,
                    [cls.hovered]: starId <= hoverId,
                };

                return (
                    <Button
                        theme={ButtonTheme.CLEAR_FULLL}
                        onMouseEnter={onHoverStar(starId)}
                        onMouseLeave={onLeaveStar}
                        onClick={onSelectStar(starId)}
                        key={starId}
                        className={cls.star}
                    >
                        <Icon
                            Svg={StarSVG}
                            size={size}
                            theme="clear"
                            className={classNames(cls.starSvg, mods, [])}
                        />
                    </Button>
                );
            })}
        </div>
    );
});
