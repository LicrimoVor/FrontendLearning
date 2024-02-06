import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    readonly?: boolean,
    onChange?: (value: Country) => void,
}

const options = [
    { value: Country.Armenia, component: Country.Armenia },
    { value: Country.Belarus, component: Country.Belarus },
    { value: Country.Russia, component: Country.Russia },
    { value: Country.China, component: Country.China },
    { value: Country.Japan, component: Country.Japan },
    { value: Country.Kazakhstan, component: Country.Kazakhstan },
];

/** Выбор валюты */
export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        value,
        readonly,
        onChange,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Country')}
            data={options}
            selectedValue={value}
            onChange={onChangeHandler}
            disabled={readonly}
            direction="top right"
        />
    );
});
