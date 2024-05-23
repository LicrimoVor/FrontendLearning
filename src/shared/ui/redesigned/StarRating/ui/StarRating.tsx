import {
    FC, memo, useCallback, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import StarSVG from '@/shared/assets/icons/star.svg';
import { ToggleFeatures } from '@/shared/lib/features';

import { Icon as IconDeprecated } from '../../../deprecated/Icon';
import { Button as ButtonDeprecated, ButtonTheme } from '../../../deprecated/Button/ui/Button';
import { Icon } from '../../Icon';
import { HStack } from '../../Stack';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string,
    onChange?: (val: number) => void,
    value?: number,
    size?: number | string,
}

const STARS = [1, 2, 3, 4, 5];

/**
 * Рейтинг звездочками
 */
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
        <HStack className={className}>
            {STARS.map((starId) => {
                const isSelected = value ? starId <= value : false;
                const mods = {
                    [cls.selected]: isSelected,
                    [cls.hovered]: starId <= hoverId,
                };
                const data = {
                    onMouseEnter: onHoverStar(starId),
                    onMouseLeave: onLeaveStar,
                    onClick: onSelectStar(starId),
                    'data-testid': `StarRating.${starId}${isSelected ? '.selected' : ''}`,
                };

                return (
                    <ToggleFeatures
                        key={starId}
                        feature="isAppRedesigned"
                        off={(
                            <ButtonDeprecated
                                {...data}
                                key={starId}
                                theme={ButtonTheme.CLEAR_FULLL}
                                className={cls.star}
                            >
                                <IconDeprecated
                                    Svg={StarSVG}
                                    size={size}
                                    theme="clear"
                                    className={classNames(cls.starSvg, mods)}
                                />
                            </ButtonDeprecated>
                        )}
                        on={(
                            <Icon
                                {...data}
                                keyId={starId}
                                Svg={StarSVG}
                                size={size}
                                clickable
                                className={classNames(cls.starSvgRedesigned, mods)}
                            />
                        )}
                    />
                );
            })}
        </HStack>
    );
});
