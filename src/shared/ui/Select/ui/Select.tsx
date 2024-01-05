import {
    ChangeEvent, FC, memo, useCallback, useMemo,
} from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption{
    value: string,
    content: string,
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string,
    readonly?: boolean,
    onChange?: (value: string) => void,
}

/** Выбор из выпадающего списка */
export const Select: FC<SelectProps> = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
    }, [onChange]);

    const optionsList = useMemo(() => options?.map((opt: SelectOption) => (
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
