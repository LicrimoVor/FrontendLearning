import { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import HomeSvg from '@/shared/assets/icons/home.svg';
import FetchSvg from '@/shared/assets/icons/arrow_simple.svg';
import { useFetchArticleCanvas, useSetArticleCanvas } from '@/features/Article/ArticleCanvas';

import cls from './ArticleCanvasToolbar.module.scss';

interface ArticleCanvasToolbarProps {
    className?: string,
}

/**
 * Toolbar для бескочного поля статей
 */
export const ArticleCanvasToolbar: FC <ArticleCanvasToolbarProps> = memo((
    props: ArticleCanvasToolbarProps,
) => {
    const {
        className,
    } = props;

    const {
        onChangeOffset,
        onChangeZoom,
    } = useSetArticleCanvas();

    const onHomeClick = useCallback(() => {
        onChangeOffset({ x: 0, y: 0 });
        onChangeZoom(1);
    }, [onChangeZoom, onChangeOffset]);

    const { onFetchArticle } = useFetchArticleCanvas();

    return (
        <VStack
            className={classNames(
                cls.ArticleCanvasToolbar,
                {},
                [className],
            )}
            align="center"
            justify="center"
            max
        >
            <Icon
                Svg={HomeSvg}
                onClick={onHomeClick}
                clickable
                size={32}
            />
            <Icon
                Svg={FetchSvg}
                onClick={onFetchArticle}
                clickable
                size={32}
            />
        </VStack>
    );
});
