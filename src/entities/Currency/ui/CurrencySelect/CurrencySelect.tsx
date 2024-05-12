import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string,
    value?: Currency,
    readonly?: boolean,
    onChange?: (value: Currency) => void,
}

const options = [
    { value: Currency.RUB, component: Currency.RUB },
    { value: Currency.EUR, component: Currency.EUR },
    { value: Currency.USD, component: Currency.USD },
];

/** Выбор валюты */
export const CurrencySelect: FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        value,
        readonly,
        onChange,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Currency')}
            data={options}
            selectedValue={value}
            onChange={onChangeHandler}
            disabled={readonly}
            direction="top right"
        />
    );
});
