import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/order';
import { Select, SelectOption } from '@/shared/ui/Select';
import { HStack } from '@/shared/ui/Stack';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeSort: (newSort: ArticleSortField) => void,
    onChangeOrder: (newOrder: SortOrder) => void,
}

/** Фильтры и сортировка списка статей */
export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((
    props: ArticleSortSelectorProps,
) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;

    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Increasing'),
        },
        {
            value: 'desc',
            content: t('Decreasing'),
        },
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Created'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Views'),
        },
    ], [t]);

    return (
        <HStack
            gap={8}
            className={classNames('', {}, [className])}
            data-testid="ArticleSortSelector"
        >
            <Select<ArticleSortField>
                options={sortOptions}
                label={t('SortBy')}
                value={sort}
                onChange={onChangeSort}
                data-testid="ArticleSortSelector.SORT"
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('OrderBy')}
                value={order}
                onChange={onChangeOrder}
                data-testid="ArticleSortSelector.ORDER"
            />
        </HStack>
    );
});
