import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ProfilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
};

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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames('', {}, [className])}
            >
                {t('АЗАЗЗАЗАЗ')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
