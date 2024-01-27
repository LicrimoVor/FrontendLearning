import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs, TabItem } from 'shared/ui/Tabs';

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
        <div className={classNames('', {}, [className])}>
            <Tabs<ArticleType>
                tabs={typeTabs}
                value={value}
                onTabClick={onChangeType}
            />
        </div>
    );
});