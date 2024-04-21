import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean,
}

/** Список комментариев */
export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack max className={classNames('', {}, [className])}>
                <CommentCard
                    isLoading
                    className={cls.comment}
                />
                <CommentCard
                    isLoading
                    className={cls.comment}
                />
                <CommentCard
                    isLoading
                    className={cls.comment}
                />
            </VStack>
        );
    }

    return (
        <VStack
            max
            className={classNames('', {}, [className])}
            data-testid="CommentList"
        >
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        className={cls.comment}
                        key={comment.text + comment.id}
                    />
                ))
                : <Text text={t('There are no comments')} />}
        </VStack>
    );
});
