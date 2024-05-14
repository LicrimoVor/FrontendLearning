import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { StickyComponentLayout } from '@/shared/layouts/StickyComponentLayout';
import { Article, ArticleList, ArticleView } from '@/entities/Article';

import { FilterContainer } from '../FilterContainer/FilterContainer';
import { ViewSwitcherContainer } from '../ViewSwitcherContainer/ViewSwitcherContainer';
import cls from './ArticlePageInfinity.module.scss';

interface ArticleInfinityProps {
    className?: string,
    articles?: Article[],
    view?: ArticleView,
    isLoading?: boolean,
    hasMore?: boolean,
    onLoadNextPart: () => void,
    index: number,
    setIndex: (index: number) => void,
}

/** Новый бесконечный список статей с фильтрами */
export const RedesignedArticleInfinity: FC<ArticleInfinityProps> = (props) => {
    const {
        className,
        articles,
        view,
        isLoading,
        onLoadNextPart,
        index,
        setIndex,
        hasMore,
    } = props;

    return (
        <div
            className={classNames(cls.RedesignedArticlePage, {}, [className])}
            data-testid="ArticlePageInfinity"
        >
            <StickyComponentLayout
                left={<ViewSwitcherContainer />}
                content={(
                    <ArticleList
                        articles={articles}
                        view={view}
                        isLoading={isLoading}
                        onLoadNextPart={onLoadNextPart}
                        initialArticleIndex={{
                            index,
                            setIndex,
                        }}
                        useWindowScroll
                        hasMore={hasMore}
                    />
                )}
                right={(<FilterContainer className={cls.header} />)}
            />
        </div>
    );
};
