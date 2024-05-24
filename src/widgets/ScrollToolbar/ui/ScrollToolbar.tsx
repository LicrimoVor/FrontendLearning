import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string,
}

/** Левая панель с кнопкой прокрутки вверх */
export const ScrollToolbar: FC<ScrollToolbarProps> = memo((props: ScrollToolbarProps) => {
    const {
        className,
    } = props;

    return (
        <VStack
            className={classNames(
                cls.ScrollToolbar,
                {},
                [className],
            )}
            align="center"
            justify="center"
            max
        >
            <ScrollToTopButton />
        </VStack>
    );
});
