import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { RatingDeprecated } from './RatingDeprecated';
import { RatingRedesigned } from './RatingRedesigned';

interface RatingProps {
    className?: string,
    title?: string,
    selectStar?: number,
    feedback?: boolean,
    isLoading?: boolean,
    feedbackTitle?: string,
    feedbackValue?: string,
    onSubmitFeedback?: (value: string) => void,
    onSelectStar?: (value: number) => void,
}

/** Карточка рейтинга */
export const Rating: FC<RatingProps> = memo((props: RatingProps) => {
    const {
        className,
        title,
        selectStar,
        feedback,
        isLoading,
        feedbackTitle,
        feedbackValue = '',
        onSubmitFeedback,
        onSelectStar,
    } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [textFeedback, setTextFeedBack] = useState('');

    useEffect(() => {
        setTextFeedBack(feedbackValue);
    }, [feedbackValue]);

    const onSelectStarHandler = useCallback((val: number) => {
        if (onSelectStar) {
            onSelectStar(val);
        }
        if (feedback) {
            setModalOpen(true);
        }
    }, [feedback, onSelectStar]);

    const onCloseModal = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen]);

    const onSubmitFeedbackHandler = useCallback(() => {
        if (onSubmitFeedback) {
            onSubmitFeedback(textFeedback);
        }
        setModalOpen(false);
    }, [setModalOpen, onSubmitFeedback, textFeedback]);

    const data = {
        className,
        title,
        modalOpen,
        onCloseModal,
        isLoading,
        selectStar,
        onSelectStar: onSelectStarHandler,
        onSubmitFeedback: onSubmitFeedbackHandler,
        feedbackTitle,
        textFeedback,
        setTextFeedBack,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<RatingDeprecated {...data} />}
            on={<RatingRedesigned {...data} />}
        />
    );
});
