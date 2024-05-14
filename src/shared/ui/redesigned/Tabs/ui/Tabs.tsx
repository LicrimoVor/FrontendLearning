import { useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/typedMemo/typedMemo';

import { TabItem } from '../model/types/item';
import { Card } from '../../Card';
import { Flex } from '../../Stack';
import cls from './Tabs.module.scss';

type FlexDirection = 'column' | 'row';

interface TabsProps<T extends string> {
    className?: string,
    tabs: TabItem<T>[]
    value: string,
    onTabClick: (tab: T) => void,
    direction?: FlexDirection;
}

/**
 * Картички, которые можно переключать м/у собой
 */
export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        direction = 'row',
    } = props;

    const onClickFabric = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab.value);
    }, [onTabClick]);

    return (
        <Flex
            gap={8}
            direction={direction}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = value === tab.value;

                return (
                    <Card
                        variant={isSelected ? 'light' : 'normal'}
                        className={classNames(cls.tab, { [cls.isSelected]: isSelected })}
                        key={tab.value}
                        onClick={onClickFabric(tab)}
                        border="round"
                        padding={0}
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
