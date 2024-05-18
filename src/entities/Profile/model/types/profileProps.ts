import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from './profile';

export interface ProfileCardProps {
    className?: string
    data?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeFirstName?: (value?: string)=> void,
    onChangeLastname?: (value?: string) => void,
    onChangeUsername?: (value?: string)=> void,
    onChangeAge?: (value?: string)=> void,
    onChangeCity?: (value?: string)=> void,
    onChangeAvatar?: (value?: string)=> void,
    onChangeCurrency?: (value?: Currency)=> void,
    onChangeCountry?: (value?: Country) => void,

}
