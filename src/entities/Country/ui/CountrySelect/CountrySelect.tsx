import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    readonly?: boolean,
    onChange?: (value: Country) => void,
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.China, content: Country.China },
    { value: Country.Japan, content: Country.Japan },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
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
        <Select
            className={classNames('', {}, [className])}
            label={t('Country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
