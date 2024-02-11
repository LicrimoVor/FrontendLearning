import {
    FC, HTMLAttributeAnchorTarget, memo, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSceleton } from '../ArticleListItem/ArticleListItemSceleton';
import cls from './ArticleList.module.scss';

interface articleListProps {
    articles?: Article[],
    className?: string,
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    Header?: FC,
    onLoadNextPart?: () => void,
    initialArticleIndex?: {
        setIndex: (index: number) => void,
        index: number,
    },
    countSceleton?: number,
}

const getSkeletons = (view: ArticleView, countSceleton: number) => new Array(countSceleton)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSceleton
            className={cls.card}
            view={view}
            key={index}
        />
    ));

/** Отображения списка статей */
export const ArticleList: FC<articleListProps> = memo((props: articleListProps) => {
    const {
        className,
        articles = [],
        isLoading,
        view = ArticleView.SMALL,
        target,
        Header,
        onLoadNextPart,
        initialArticleIndex,
        countSceleton = view === ArticleView.BIG ? 3 : 10,
    } = props;

    const { t } = useTranslation('article');
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useInitialEffect(() => {
        let timmer: NodeJS.Timeout;
        if (view === ArticleView.SMALL && initialArticleIndex) {
            timmer = setTimeout(() => {
                virtuosoGridRef.current?.scrollToIndex(initialArticleIndex.index);
            }, 100);
        }

        return () => (clearTimeout(timmer));
    });

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            onClickBtn={() => (initialArticleIndex?.setIndex(index))}
        />
    );

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div
                    className={cls.sceleton}
                >
                    {getSkeletons(view, countSceleton)}
                </div>
            );
        }
        return null;
    });

    if (!isLoading && !articles.length) {
        return (
            <Text
                title={t('NotFoundArticles')}
            />
        );
    }

    const ItemSceletonGrid = memo(({ index }: {index: number}) => (
        <ArticleListItemSceleton
            key={index}
            view={ArticleView.SMALL}
            className={cls.itemSceleton}
        />
    ));

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {view === ArticleView.BIG
                ? (
                    <Virtuoso
                        endReached={onLoadNextPart}
                        itemContent={renderArticle}
                        data={articles}
                        initialTopMostItemIndex={initialArticleIndex?.index}
                        components={{
                            Header,
                            Footer,
                        }}
                    />
                )
                : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        totalCount={articles.length}
                        endReached={onLoadNextPart}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={cls.itemsWrapper}
                        components={{
                            Header,
                            ScrollSeekPlaceholder: ItemSceletonGrid,
                            Footer,
                        }}
                        scrollSeekConfiguration={{
                            enter: (velocity) => Math.abs(velocity) > 400,
                            exit: (velocity) => Math.abs(velocity) < 15,
                        }}
                    />
                )}
        </div>
    );
});
