import { FC, memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hook/userArticleFilters';

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
    );
});
