import {
    FC, memo, useEffect, useState,
} from 'react';

import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowUpSvg from '@/shared/assets/icons/arrow_up.svg';
import { classNames } from '@/shared/lib/classNames';

import cls from './ScrollToTopButton.module.scss';

interface ScrollToTopButtonProps {
    className?: string,
}

/** Кнопка для прокрутки вверх страницы */
export const ScrollToTopButton: FC<ScrollToTopButtonProps> = memo((
    props: ScrollToTopButtonProps,
) => {
    const {
        className,
    } = props;

    const [position, setPosition] = useState(0);
    const [isDown, setIsDown] = useState(false);

    const onClick = () => {
        if (isDown) {
            setIsDown(false);
            document.documentElement.scrollTop = position;
        } else {
            setIsDown(true);
            setPosition(document.documentElement.scrollTop);
            document.documentElement.scrollTop = 0;
        }
    };

    useEffect(() => {
        window.onscroll = (e) => {
            if (isDown && document.documentElement.scrollTop !== 0) {
                setIsDown(false);
            }
        };
    }, [setIsDown, isDown]);

    return (
        <Icon
            aria-labelledby="scroll-down"
            clickable
            onClick={onClick}
            Svg={ArrowUpSvg}
            className={classNames('', { [cls.rotate]: isDown }, [className])}
            size={32}
        />
    );
});
