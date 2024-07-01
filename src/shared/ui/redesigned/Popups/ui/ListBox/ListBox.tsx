import { ReactNode, useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/typedMemo';
import ArrowDown from '@/shared/assets/icons/arrow_down.svg';
import { HeadlessuiProvider, useHealdessuiContext } from '@/shared/lib/components/HeadlessuiProvider';

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
    textBtn?: string,
    direction?: PopupDirection,
    onChange: (value: T) => void,
}

/**
 * Всплывающее окно с выбором
 */
const ListBoxComponent = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        data,
        readonly,
        defaultValue,
        label,
        selectedValue = defaultValue || data[0],
        textBtn,
        direction = 'bottom right',
        onChange,
    } = props;

    const [textButton, setTextButton] = useState(textBtn);
    const { library: ui, isLoading } = useHealdessuiContext();

    useEffect(() => {
        if (textButton === undefined) {
            const content = data.find((item) => item.value === selectedValue)?.content;
            setTextButton(content);
        }
    }, [selectedValue, textButton, data]);

    const optionsClasses = [
        PopupDirectionConvert[direction],
        cls.popupMenu,
    ];

    if (isLoading) {
        return null;
    }

    return (
        <HStack gap={4}>
            {label && <Text text={label} />}
            <ui.Listbox
                as="div"
                value={selectedValue}
                onChange={onChange}
                className={classNames(popupsCls.Popup, {}, [className])}
                disabled={readonly}
            >
                <ui.Listbox.Button as="div">
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowDown} />}
                    >
                        {textButton}
                    </Button>
                </ui.Listbox.Button>
                <ui.Listbox.Options
                    className={classNames(popupsCls.popupMenu, {}, optionsClasses)}
                >
                    {data.map((item) => (
                        <ui.Listbox.Option
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
                        </ui.Listbox.Option>
                    ))}
                </ui.Listbox.Options>
            </ui.Listbox>
        </HStack>
    );
});

export default typedMemo(<T extends string>(props: ListBoxProps<T>) => (
    <HeadlessuiProvider>
        <ListBoxComponent<T> {...props} />
    </HeadlessuiProvider>
));
export type ListBoxType = typeof ListBoxComponent;
