import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { useInitialEffect } from '@/shared/lib/hooks/userInitialEffect/userInitialEffect';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../model/types/validateProfileError';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { ProfileRating } from '@/features/ProfileRating';

const regNumb: RegExp = /^[+ 0-9]{0,3}$/;

const reducers: ReducerList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    profileId: string,
}

/** Карточка изменяемого профиля */
export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const {
        profileId,
    } = props;

    const validateErrors = useSelector(getProfileValidateErrors);
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const validateErrorTranslate = {
        [ValidateProfileError.INCORRECT_AGE]: t('INCORRECT_AGE'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('INCORRECT_COUNTRY'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('INCORRECT_USER_DATA'),
        [ValidateProfileError.NO_DATA]: t('NO_DATA'),
        [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(profileId));
    });

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <EditableProfileCardHeader />
            {validateErrors?.length && validateErrors.map((err) => (
                <Text
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslate[err]}
                    key={err}
                />
            ))}
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
            <ProfileRating
                profileId={profileId}
            />
        </DynamicModuleLoader>
    );
};
