import { useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/typedMemo/typedMemo';

import { TabItem } from '../model/types/item';
import { Card, CardTheme } from '../../Card';
import cls from './Tabs.module.scss';

interface TabsProps<T extends string> {
    className?: string,
    tabs: TabItem<T>[]
    value: string,
    onTabClick: (tab: T) => void,
}

/**
 * @deprecated
 * Картички, которые можно переключать м/у собой
 */
const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const onClickFabric = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab.value);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={value === tab.value ? CardTheme.OUTLINE : CardTheme.NORMAL}
                    className={cls.tab}
                    key={tab.value}
                    onClick={onClickFabric(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

export default Tabs;
export type TabsType = typeof Tabs;
