import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { Rating } from '@/entities/Rating';

import { useCreateProfileRating, useGetProfileRating, useUpdateProfileRating } from '../api/profileRatingApi';

interface ProfileRatingProps {
    className?: string,
    profileId: string,
}

/** Рейтинг профиля */
export const ProfileRating: FC<ProfileRatingProps> = memo((
    props: ProfileRatingProps,
) => {
    const {
        className,
        profileId,
    } = props;

    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const { data, isFetching } = useGetProfileRating(
        { userId: authData?.id || '', profileId },
        { skip: authData === undefined },
    );
    const [createRating, { isLoading: isLoadingCreate }] = useCreateProfileRating();
    const [updateRating, { isLoading: isLoadingUpdate }] = useUpdateProfileRating();

    const onSelectStar = useCallback((value: number) => {
        if (authData) {
            if (data) {
                updateRating({
                    rate: value,
                    id: data.id,
                });
            } else {
                createRating({
                    profileId,
                    userId: authData.id,
                    rate: value,
                });
            }
        }
    }, [data, authData, profileId, createRating, updateRating]);

    const onSubmitFeedback = useCallback((value: string) => {
        updateRating({
            id: data!.id,
            feedback: value,
        });
    }, [updateRating, data]);

    return (
        <Rating
            className={classNames('', {}, [className])}
            onSelectStar={onSelectStar}
            onSubmitFeedback={onSubmitFeedback}
            title={data ? t('Evaluation complete') : t('Evaluation')}
            isLoading={isFetching || isLoadingUpdate || isLoadingCreate}
            feedback
            feedbackTitle={data ? t('Feedback complete') : t('Feedback')}
            feedbackValue={data?.feedback}
            selectStar={data?.rate}
            data-testid="ProfileRating"
        />
    );
});
