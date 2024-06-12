import { FC, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { Article, ArticleList, ArticleView } from '@/entities/Article';

import { FilterContainer } from '../FilterContainer/FilterContainerRed';
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

    const refComponent = useRef(null);

    return (
        <div
            className={classNames(cls.RedesignedArticlePage, {}, [className])}
            data-testid="ArticlePageInfinity"
            ref={refComponent}
        >
            <StickyContentLayout
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
