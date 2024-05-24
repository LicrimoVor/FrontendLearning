import { FC, memo } from 'react';

import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowUpSvg from '@/shared/assets/icons/arrow_up.svg';

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

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            clickable
            onClick={onClick}
            Svg={ArrowUpSvg}
            className={className}
            size={32}
        />
    );
});
