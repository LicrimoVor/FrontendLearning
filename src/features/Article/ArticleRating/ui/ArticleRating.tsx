import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';

import { useCreateArticleRating, useGetArticleRating, useUpdateArticleRating } from '../api/articleRatingApi';

interface ArticleRatingProps {
    className?: string,
    articleId: string,
}

/** Рейтинг статей */
const ArticleRating: FC<ArticleRatingProps> = (props) => {
    const {
        className,
        articleId,
    } = props;

    const { t } = useTranslation('article');
    const authData = useSelector(getUserAuthData);
    const { data, isFetching } = useGetArticleRating(
        { userId: authData!.id, articleId },
        { skip: authData === undefined },
    );
    const [createRating, { isLoading: isLoadingCreate }] = useCreateArticleRating();
    const [updateRating, { isLoading: isLoadingUpdate }] = useUpdateArticleRating();

    const onSelectStar = useCallback((value: number) => {
        if (data !== undefined) {
            updateRating({
                rate: value,
                id: data.id,
            });
        } else {
            createRating({
                articleId,
                userId: authData!.id,
                rate: value,
            });
        }
    }, [data, authData, articleId, createRating, updateRating]);

    const onSubmitFeedback = useCallback((value: string) => {
        if (data === undefined) {
            setTimeout(() => {
                onSubmitFeedback(value);
            }, 1000);
        } else {
            updateRating({
                id: data!.id,
                feedback: value,
            });
        }
    }, [updateRating, data]);

    const params = {
        onSelectStar,
        onSubmitFeedback,
        title: data ? t('Evaluation complete') : t('Evaluation'),
        isLoading: isFetching || isLoadingUpdate || isLoadingCreate,
        feedback: true,
        feedbackTitle: data ? t('Feedback complete') : t('Feedback'),
        feedbackValue: data?.feedback,
        selectStar: data?.rate,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <CardDeprecated className={className}>
                    <Rating
                        {...params}
                    />
                </CardDeprecated>
            )}
            on={(
                <CardRedesigned className={className}>
                    <Rating
                        {...params}
                    />
                </CardRedesigned>
            )}
        />

    );
};

export default memo(ArticleRating);
