import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { profileActions } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';

const regNumb: RegExp = /^[+ 0-9]{0,3}$/;

/** Карта изменяемого профиля */
export const EditableProfileCard: FC = () => {
    const data = useSelector(getProfileData);
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        console.log(value);
        if (value === undefined) {
            dispatch(profileActions.updateProfile({ age: 0 }));
        }
        if (regNumb.test(value!)) {
            dispatch(profileActions.updateProfile({ age: Number(value) }));
        }
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <div>
            <ProfilePageHeader />
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                onChangeFirstName={onChangeFirstName}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                readonly={readonly}
            />
        </div>
    );
};
