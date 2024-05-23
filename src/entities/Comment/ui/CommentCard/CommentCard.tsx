import { FC, memo } from 'react';

import { getRouteProfile } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { UserAvatar } from '@/entities/User';

import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment?: Comment,
    isLoading?: boolean,
}

const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
});

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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <div
                    className={classNames(cls.CommentCard, {}, [className])}
                    data-testid="CommentCard"
                >
                    <AppLinkDeprecated
                        className={cls.header}
                        to={getRouteProfile(comment.user.id)}
                    >
                        {comment.user.avatar ? (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                        ) : null}
                        <TextDeprecated
                            title={comment.user.username}
                            className={cls.username}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated
                        text={comment.text}
                        className={cls.text}
                    />
                </div>
            )}
            on={(
                <Card
                    className={className}
                    data-testid="CommentCard"
                >
                    <VStack>
                        <UserAvatar user={comment.user} viewUsername />
                        <Text
                            text={comment.text}
                            className={cls.textRedesigned}
                        />
                    </VStack>
                </Card>
            )}
        />

    );
});
