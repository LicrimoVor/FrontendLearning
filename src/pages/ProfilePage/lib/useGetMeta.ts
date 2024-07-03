import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getProfileData } from '@/features/Profile/EditableProfile';

export const useGetMeta = () => {
    const data = useSelector(getProfileData);
    const { t } = useTranslation('profile');

    return {
        title: data?.username,
        description: data ? `${t('Profile user')} ${data.first} ${data.lastname}` : t('Profile user'),
    };
};
