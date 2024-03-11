import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
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

    const { t } = useTranslation('article-detail');
    const authData = useSelector(getUserAuthData);
    const { data, isFetching } = useGetArticleRating(
        { userId: authData!.id, articleId },
        { skip: authData === undefined },
    );
    const [createRating, { isLoading: isLoadingCreate }] = useCreateArticleRating();
    const [updateRating, { isLoading: isLoadingUpdate }] = useUpdateArticleRating();

    const onSelectStar = useCallback((value: number) => {
        if (data) {
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
            title={data ? t('EvaluationComplete') : t('Evaluation')}
            isLoading={isFetching || isLoadingUpdate || isLoadingCreate}
            feedback
            feedbackTitle={data ? t('FeedbackComplete') : t('Feedback')}
            feedbackValue={data?.feedback}
            selectStar={data?.rate}
        />
    );
};

export default memo(ArticleRating);
