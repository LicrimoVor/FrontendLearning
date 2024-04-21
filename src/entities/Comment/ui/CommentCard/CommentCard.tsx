import { FC, memo } from 'react';

import { getRouteProfile } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment?: Comment,
    isLoading?: boolean,
}

/** Карточка комментария */
export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={15}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="CommentCard"
        >
            <AppLink className={cls.header} to={getRouteProfile(comment.user.id)}>
                {comment.user?.avatar ? (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                ) : null}
                <Text
                    title={comment.user.username}
                    className={cls.username}
                />
            </AppLink>
            <Text
                text={comment.text}
                className={cls.text}
            />
        </div>
    );
});
