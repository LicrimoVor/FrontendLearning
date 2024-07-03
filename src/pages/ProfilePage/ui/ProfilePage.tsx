import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { MetaData } from '@/shared/lib/components/MetaData';
import { EditableProfileCard } from '@/features/Profile/EditableProfile';
import { Page } from '@/widgets/Page';
import { useGetMeta } from '../lib/useGetMeta';

/** Страница профиля пользователя */
const ProfilePage: FC = () => {
    const { t } = useTranslation('profile');
    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) {
        return (
            <div>
                {t('Not found')}
            </div>
        );
    }

    return (
        <Page data-testid="Profile page">
            <MetaData useGetMeta={useGetMeta} />
            <EditableProfileCard profileId={id} />
        </Page>
    );
};

export default ProfilePage;
