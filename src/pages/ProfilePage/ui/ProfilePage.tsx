import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { EditableProfileCard } from 'features/EditableProfile';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
    className?: string
}

/** Страница профиля пользователя */
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;

    return (

        <Page
            className={classNames('', {}, [className])}
        >
            <EditableProfileCard />
        </Page>

    );
};

export default ProfilePage;
