import {
    FC, HTMLAttributeAnchorTarget, memo, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
    Virtuoso, VirtuosoGrid, VirtuosoGridHandle,
} from 'react-virtuoso';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/userInitialEffect';
import { Text } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleItemSkeleton } from '../ArticleListItem/ArticleItemSkeleton';
import { getCountSceleton } from '../../lib/getCountSceleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    articles?: Article[],
    className?: string,
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    onLoadNextPart?: () => void,
    initialArticleIndex?: {
        setIndex: (index: number) => void,
        index?: number,
    },
    countSceleton?: number,
    useWindowScroll?: boolean,
    hasMore?: boolean,
    Header?: FC,
    GridDecorator?: FC,
}

const getSkeletons = (view: ArticleView, countSceleton: number) => new Array(countSceleton)
    .fill(0)
    .map((_, index) => (
        <ArticleItemSkeleton
            className={toggleFeatures({
                name: 'isAppRedesigned',
                off: () => cls.card,
                on: () => cls.cardRedesigned,
            })}
            view={view}
            key={index}
        />
    ));

/** Отображения списка статей */
export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
    const {
        className,
        articles = [],
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart,
        initialArticleIndex,
        countSceleton,
        useWindowScroll,
        hasMore,
        Header,
        GridDecorator,
    } = props;

    const { t } = useTranslation('article');
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const refComponent = useRef<HTMLDivElement>(null);

    useInitialEffect(() => {
        let timmer: NodeJS.Timeout;
        if (view === ArticleView.SMALL && initialArticleIndex?.index !== undefined) {
            timmer = setTimeout(() => {
                virtuosoGridRef.current?.scrollToIndex(initialArticleIndex.index!);
            }, 100);
        }

        return () => (clearTimeout(timmer));
    });

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            view={view}
            className={toggleFeatures({
                name: 'isAppRedesigned',
                off: () => cls.card,
                on: () => cls.cardRedesigned,
            })}
            key={article.id}
            onClickBtn={() => (initialArticleIndex?.setIndex(index))}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <Text
                title={t('Not found articles')}
            />
        );
    }
    const Footer = memo(() => {
        if (isLoading || hasMore) {
            const countScel = countSceleton
                || getCountSceleton(refComponent, view, cls.itemsWrapper);
            return (
                <div
                    className={toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => cls.skeletonDeprecated,
                        on: () => cls.skeletonRedesigned,
                    })}
                >
                    {getSkeletons(view, countScel)}
                </div>
            );
        }

        return (
            <div
                className={toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => cls.skeletonDeprecated,
                    on: () => cls.skeletonRedesigned,
                })}
            >
                {t('The articles are over')}
            </div>
        );
    });

    const ItemSceletonGrid = memo(({ index }: {index: number}) => (
        <ArticleItemSkeleton
            key={index}
            view={ArticleView.SMALL}
            className={cls.itemSceleton}
        />
    ));

    return (
        <div
            className={classNames('', {}, [className, cls[view]])}
            data-testid="ArticleList"
            ref={refComponent}
        >
            {view === ArticleView.BIG
                ? (
                    <Virtuoso
                        useWindowScroll={useWindowScroll}
                        endReached={onLoadNextPart}
                        totalCount={articles.length}
                        itemContent={renderArticle}
                        data={articles}
                        initialTopMostItemIndex={initialArticleIndex?.index}
                        components={
                            {
                                Footer:
                                    toggleFeatures(
                                        {
                                            name: 'isAppRedesigned',
                                            off: () => Footer,
                                            on: () => undefined,
                                        },
                                    ),
                                Header,
                            }
                        }

                    />
                )
                : (
                    <VirtuosoGrid
                        useWindowScroll={useWindowScroll}
                        ref={virtuosoGridRef}
                        endReached={onLoadNextPart}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={cls.itemsWrapper}
                        components={{
                            List: GridDecorator,
                            Header,
                            Footer:
                                toggleFeatures(
                                    {
                                        name: 'isAppRedesigned',
                                        off: () => Footer,
                                        on: () => undefined,
                                    },
                                ),
                            ScrollSeekPlaceholder: ItemSceletonGrid,
                        }}
                        scrollSeekConfiguration={{
                            enter: (velocity) => Math.abs(velocity) > 500,
                            exit: (velocity) => Math.abs(velocity) < 5,
                        }}
                    />
                )}
            <ToggleFeatures
                feature="isAppRedesigned"
                off={null}
                on={<Footer />}
            />
        </div>
    );
});
