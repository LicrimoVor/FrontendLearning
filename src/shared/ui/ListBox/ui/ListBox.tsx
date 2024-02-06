import { FC, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Direction } from 'shared/types/ui';
import { HStack } from '../../Stack';
import { Text } from '../../Text/Text';
import { Button, ButtonTheme } from '../../Button/Button';
import cls from './ListBox.module.scss';

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
    direction?: Direction,
    onChange: (value: string) => void,
}

const ListBoxDirection: Record<Direction, string> = {
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight,
    'top left': cls.topLeft,
    'top right': cls.topRight,
};

/** Всплывающее окно с выбором */
export const ListBox: FC<ListBoxProps> = memo((props: ListBoxProps) => {
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
        ListBoxDirection[direction],
    ];
    const textBtn = selectedValue || defaultValue || data[0].value;

    return (
        <HStack gap={4} className={classNames('', {}, [className])}>
            {label && <Text className={cls.listText} text={`${label}>`} />}
            <HListbox
                as="div"
                value={selectedValue}
                onChange={onChange}
                className={cls.ListBox}
            >
                <HListbox.Button
                    className={classNames(cls.trigger, { [cls.disabled]: disabled }, [])}
                >
                    <Button
                        disabled={disabled}
                        theme={ButtonTheme.CLEAR}
                    >
                        {disabled ? textBtn : `${textBtn} \\/`}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
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
