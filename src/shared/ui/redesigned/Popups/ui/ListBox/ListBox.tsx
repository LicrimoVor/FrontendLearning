import { ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/typedMemo';
import ArrowDown from '@/shared/assets/icons/arrow_down.svg';

import { HStack } from '../../../Stack';
import { Text } from '../../../Text';
import { Button } from '../../../Button';
import { PopupDirection } from '../../styles/types';
import { PopupDirectionConvert } from '../../styles/consts';
import { Icon } from '../../../Icon';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/popups.module.scss';

interface ListBoxItem<T extends string> {
    value: T,
    component?: ReactNode,
    readonly?: boolean,
    content?: string,
}

interface ListBoxProps<T extends string> {
    className?: string,
    data: ListBoxItem<T>[],
    selectedValue?: T,
    defaultValue?: T,
    readonly?: boolean,
    label?: string,
    direction?: PopupDirection,
    onChange: (value: T) => void,
}

/**
 * Всплывающее окно с выбором
 */
export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        data,
        selectedValue,
        readonly,
        defaultValue,
        label,
        direction = 'bottom right',
        onChange,
    } = props;

    const optionsClasses = [
        PopupDirectionConvert[direction],
    ];

    const selectedItem = useMemo(() => (
        data.find((item) => item.value === selectedValue)?.content
    ), [data, selectedValue]);
    const textBtn = selectedItem || defaultValue || data[0].content;

    return (
        <HStack gap={4}>
            {label && <Text text={label} />}
            <HListbox
                as="div"
                value={selectedValue}
                onChange={onChange}
                className={classNames(popupsCls.Popup, {}, [className])}
                disabled={readonly}
            >
                <HListbox.Button as="div">
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={readonly ? undefined : <Icon Svg={ArrowDown} />}
                    >
                        {textBtn}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(popupsCls.popupMenu, {}, optionsClasses)}
                >
                    {data.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            className={({ active, selected }) => classNames(
                                cls.item,
                                {
                                    [cls.active]: active,
                                    [cls.selected]: selected,
                                    [cls.readonly]: item.readonly,
                                },
                                [],
                            )}
                            value={item.value}
                            disabled={item.readonly}
                        >
                            {item.content || item.component || item.value}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});
