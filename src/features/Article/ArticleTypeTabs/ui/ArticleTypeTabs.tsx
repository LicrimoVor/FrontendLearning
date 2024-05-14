import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs as TabsDeplecated, TabItem } from '@/shared/ui/deprecated/Tabs';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { ArticleType } from '@/entities/Article';

interface articleTypeTabsProps {
    className?: string,
    value: ArticleType,
    onChangeType: (type: ArticleType) => void,
}

/** Фильтр по выбору типа статьи */
export const ArticleTypeTabs: FC<articleTypeTabsProps> = memo((props: articleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;

    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.All,
            content: t('All'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('ECONOMICS'),
        },
        {
            value: ArticleType.MEDICINE,
            content: t('MEDICINE'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('SCIENCE'),
        },
    ], [t]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <TabsDeplecated<ArticleType>
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onChangeType}
                    className={classNames('', {}, [className])}
                    data-testid="ArticleTypeTabs"
                />
            )}
            on={(
                <Tabs<ArticleType>
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onChangeType}
                    className={classNames('', {}, [className])}
                    data-testid="ArticleTypeTabs"
                    direction="column"
                />
            )}
        />

    );
});
