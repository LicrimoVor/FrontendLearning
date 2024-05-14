import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleViewSwitcher } from '@/features/Article/ArticleViewSwitcher';
import { ArticleSortSelector } from '@/features/Article/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/Article/ArticleTypeTabs';

import { useArticleFilters } from '../../lib/hook/userArticleFilters';
import { useViewSwitcher } from '../../lib/hook/useViewSwitcher';
import cls from './FilterContainerDep.module.scss';

interface FilterContainerDepProps {
    className?: string,
}

/**
 * @deprecated
 * Фильтры для списка статей
 */
export const FilterContainerDep: FC<FilterContainerDepProps> = memo((
    props: FilterContainerDepProps,
) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters();

    const {
        view,
        onViewClick,
    } = useViewSwitcher();

    return (
        <div
            className={classNames('', {}, [className])}
            data-testid="ArticlePageFilter"
        >
            <HStack justify="spaceBetween">
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSwitcher view={view} onViewClick={onViewClick} />
            </HStack>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
