import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { EditableProfileCard } from '@/features/EditableProfile';
import { Page } from '@/widgets/Page';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string
}

/** Страница профиля пользователя */
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;

    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    return (
        <Page
            className={classNames('', {}, [className])}
        >
            <EditableProfileCard profileId={id} />
        </Page>
    );
};

export default ProfilePage;
