import { FC } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';
import { ProfileCardProps } from '../model/types/profileProps';

/** Карточка профиля */
export const ProfileCard: FC<ProfileCardProps> = (props) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        off={(
            <ProfileCardDeprecated {...props} />
        )}
        on={(
            <ProfileCardRedesigned {...props} />
        )}
    />
);
