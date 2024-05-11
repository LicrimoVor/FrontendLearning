import {
    CSSProperties,
    FC, forwardRef, ReactElement,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Article, ArticleList, ArticleView } from '@/entities/Article';

import cls from './ArticlePageInfinity.module.scss';

interface ArticleInfinityProps {
    className?: string,
    articles?: Article[],
    view?: ArticleView,
    isLoading?: boolean,
    hasMore?: boolean,
    Header: FC,
    onLoadNextPart: () => void,
    index: number,
    setIndex: (index: number) => void,
}

interface GridDecoratorProps {
    children?: ReactElement,
    style?: CSSProperties,
}

const GridDecorator = forwardRef<HTMLDivElement, GridDecoratorProps>((props, ref) => {
    const {
        children,
        style,
    } = props;

    return (
        <div
            style={{
                ...style,
                justifyContent: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
            }}
            ref={ref}
        >
            {children}
        </div>
    );
});

/** Устаревший бесконечный список статей с фильтрами */
export const DeprecatedArticleInfinity: FC<ArticleInfinityProps> = (props) => {
    const {
        className,
        Header,
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
            className={classNames(cls.DeprecatedArticlePage, {}, [className])}
            data-testid="ArticlePageInfinity"
        >
            <ArticleList
                className={cls.list}
                articles={articles}
                view={view}
                isLoading={isLoading}
                onLoadNextPart={onLoadNextPart}
                initialArticleIndex={{
                    index,
                    setIndex,
                }}
                Header={Header}
                hasMore={hasMore}
                GridDecorator={GridDecorator}
            />
        </div>
    );
};
