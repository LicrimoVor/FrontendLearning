import { FC, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../../../../redesigned/Stack';
import { Text } from '../../../Text';
import { Button } from '../../../Button';
import { PopupDirection } from '../../styles/types';
import { PopupDirectionConvert } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupsCls from '../../styles/popups.module.scss';

interface ListBoxItem {
    value: string,
    component?: ReactNode,
    readonly?: boolean,
}

interface ListBoxProps {
    className?: string,
    data: ListBoxItem[],
    selectedValue?: string,
    defaultValue?: string,
    disabled?: boolean,
    label?: string,
    direction?: PopupDirection,
    onChange: (value: string) => void,
}

/**
 * @deprecated
 * Всплывающее окно с выбором
 */
const ListBox: FC<ListBoxProps> = memo((props: ListBoxProps) => {
    const {
        className,
        data,
        selectedValue,
        disabled,
        defaultValue,
        label,
        direction = 'bottom right',
        onChange,
    } = props;

    const optionsClasses = [
        PopupDirectionConvert[direction],
    ];
    const textBtn = selectedValue || defaultValue || data[0].value;

    return (
        <HStack gap={4} className={classNames('', {}, [className])}>
            {label && <Text className={cls.listText} text={`${label}>`} />}
            <HListbox
                as="div"
                value={selectedValue}
                onChange={onChange}
                className={popupsCls.Popup}
            >
                <HListbox.Button as="div">
                    <Button
                        disabled={disabled}
                        className={classNames(cls.trigger, { [cls.disabled]: disabled }, [])}
                    >
                        {disabled ? textBtn : `${textBtn} \\/`}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(popupsCls.popupMenu, {}, optionsClasses)}>
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
                            {item.component ? item.component : item.value}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});

export default ListBox;
export type ListBoxType = typeof ListBox;
