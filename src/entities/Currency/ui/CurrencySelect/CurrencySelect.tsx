import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <ListBoxDeprecated
                    className={classNames('', {}, [className])}
                    label={t('Currency')}
                    data={options}
                    selectedValue={value}
                    onChange={onChangeHandler}
                    disabled={readonly}
                    direction="top right"
                />
            )}
            on={(
                <ListBox
                    className={classNames('', {}, [className])}
                    label={t('Currency')}
                    data={options}
                    selectedValue={value}
                    textBtn={value}
                    onChange={onChangeHandler}
                    readonly={readonly}
                    direction="top right"
                />
            )}
        />

    );
});
