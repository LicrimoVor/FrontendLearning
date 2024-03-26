import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from '@/features/Profile/EditableProfile';
import { Page } from '@/widgets/Page';

/** Страница профиля пользователя */
const ProfilePage: FC = () => {
    const { t } = useTranslation();
    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) {
        return (
            <div>
                {t('NotFound')}
            </div>
        );
    }

    return (
        <Page data-testid="ProfilePage">
            <EditableProfileCard profileId={id} />
        </Page>
    );
};

export default ProfilePage;
