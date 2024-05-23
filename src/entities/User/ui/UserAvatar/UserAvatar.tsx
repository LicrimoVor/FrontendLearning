import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { getRouteProfile } from '@/shared/const/route';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

import { User } from '../../model/types/user';
import cls from './UserAvatar.module.scss';

interface UserAvatarProps {
    className?: string,
    user: User,
    viewUsername?: boolean,
}

/** Аватар пользователя */
export const UserAvatar: FC<UserAvatarProps> = memo((props: UserAvatarProps) => {
    const {
        className,
        user,
        viewUsername,
    } = props;

    return (
        <AppLink
            className={classNames(cls.UserAvatar, {}, [className])}
            to={getRouteProfile(user.id)}
        >
            <Avatar
                size={30}
                src={user.avatar}
            />
            {viewUsername && (
                <Text
                    text={user.username}
                    className={cls.username}
                />
            )}
        </AppLink>
    );
});
