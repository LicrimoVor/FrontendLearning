import { ChangeEvent, useCallback, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import { typedMemo } from '@/shared/lib/typedMemo/typedMemo';
import { SelectOption } from '../model/types/option';
import cls from './Select.module.scss';

interface SelectProps<T extends string> {
    className?: string,
    label?: string,
    options?: SelectOption<T>[],
    value?: T,
    readonly?: boolean,
    onChange?: (value: T) => void,
}

/**
 * @deprecated
 * Выбор из выпадающего списка
 */
const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const mods: Mods = {

    };

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    const optionsList = useMemo(() => options?.map((opt: SelectOption<T>) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div
            className={classNames(cls.Wrapper, mods, [className])}
        >
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            {readonly ? <span>{value}</span>
                : (
                    <select
                        className={cls.select}
                        onChange={onChangeHandler}
                        value={value}
                    >
                        {optionsList}
                    </select>
                )}

        </div>
    );
});

export default Select;
export type SelectType = typeof Select;
