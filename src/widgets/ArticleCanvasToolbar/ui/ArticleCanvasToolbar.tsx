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
const ArticleCanvasToolbar: FC <ArticleCanvasToolbarProps> = (
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
            gap={16}
        >
            <Icon
                Svg={HomeSvg}
                onClick={onHomeClick}
                clickable
                size={32}
                aria-labelledby="home-position"
            />
            <Icon
                Svg={FetchSvg}
                onClick={onFetchArticle}
                clickable
                size={32}
                aria-labelledby="more-articles"
            />
        </VStack>
    );
};

export default memo(ArticleCanvasToolbar);
