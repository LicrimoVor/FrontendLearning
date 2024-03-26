import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Tabs, TabItem } from '@/shared/ui/Tabs';
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
        <Tabs<ArticleType>
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        />
    );
});
