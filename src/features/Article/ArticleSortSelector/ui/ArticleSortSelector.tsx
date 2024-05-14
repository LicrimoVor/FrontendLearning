import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/order';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
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
            )}
            on={(
                <VStack
                    gap={8}
                    className={classNames('', {}, [className])}
                    data-testid="ArticleSortSelector"
                >
                    <Text
                        text={t('SortBy')}
                    />
                    <ListBox<ArticleSortField>
                        data={sortOptions}
                        selectedValue={sort}
                        onChange={onChangeSort}
                        data-testid="ArticleSortSelector.SORT"
                    />
                    <ListBox<SortOrder>
                        data={orderOptions}
                        selectedValue={order}
                        onChange={onChangeOrder}
                        data-testid="ArticleSortSelector.ORDER"
                    />
                </VStack>
            )}
        />

    );
});
