import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputDeplecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { SortOrder } from '@/shared/types/order';
import { ToggleFeatures } from '@/shared/lib/features';
import SearchSVG from '@/shared/assets/icons/search.svg';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/Article/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/Article/ArticleTypeTabs';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeSort: (newSort: ArticleSortField) => void,
    onChangeOrder: (newOrder: SortOrder) => void,
    type: ArticleType,
    onChangeType: (type: ArticleType) => void,
    onChangeSearch: (value: string) => void,
    search: string,
}

/** Фильтры статей */
export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
        type,
        onChangeType,
        onChangeSearch,
        search,
    } = props;

    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            data-testid="ArticlesFilters"
            border="round"
        >
            <VStack gap={16}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={(
                        <InputDeplecated
                            placeholder={t('Search')}
                            onChange={onChangeSearch}
                            value={search}
                        />
                    )}
                    on={(
                        <Input
                            placeholder={t('Search')}
                            onChange={onChangeSearch}
                            value={search}
                            addonLeft={<SearchSVG />}
                        />
                    )}
                />

                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>

        </Card>
    );
});
