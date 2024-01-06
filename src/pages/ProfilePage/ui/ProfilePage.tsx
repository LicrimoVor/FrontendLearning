import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { EditableProfileCard } from 'features/EditableProfile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

/** Страница профиля пользователя */
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (

        <div
            className={classNames('', {}, [className])}
        >
            <EditableProfileCard />
        </div>

    );
};

export default ProfilePage;
