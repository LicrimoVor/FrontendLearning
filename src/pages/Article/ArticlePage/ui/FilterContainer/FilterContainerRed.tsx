import { FC, memo } from 'react';

import ArticleCanvas from '@/shared/assets/icons/article_canvas.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticleCanvas } from '@/shared/const/route';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hook/userArticleFilters';
import cls from './FilterContainerRed.module.scss';

interface FilterContainerProps {
    className?: string,
}

/** Фильтры для списка статей */
export const FilterContainer: FC<FilterContainerProps> = memo((
    props: FilterContainerProps,
) => {
    const {
        className,
    } = props;

    const {
        sort,
        order,
        onChangeSort,
        onChangeOrder,
        type,
        onChangeType,
        onChangeSearch,
        search,
    } = useArticleFilters();

    return (
        <VStack gap={8}>
            <ArticlesFilters
                className={className}
                sort={sort}
                order={order}
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
                type={type}
                onChangeType={onChangeType}
                onChangeSearch={onChangeSearch}
                search={search}
            />
            <div className={cls.canvas}>
                <Icon
                    clickable
                    href={getRouteArticleCanvas()}
                    Svg={ArticleCanvas}
                    size={24}
                    className={cls.icon}
                />
            </div>
        </VStack>
    );
});
