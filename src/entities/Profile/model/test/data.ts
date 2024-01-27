import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Profile } from '../types/profile';

export const profileTest: Profile = {
    id: '1',
    username: 'licrimovor',
    age: 21,
    country: Country.Russia,
    lastname: 'licrimovor',
    first: 'ivan',
    city: 'SBK',
    currency: Currency.RUB,
    avatar: AvatarImg,
};
