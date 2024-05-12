import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { BrowserView, MobileView } from '@/shared/ui/redesigned/View';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Button } from '@/shared/ui/deprecated/Button';
import { TextArea } from '@/shared/ui/deprecated/TextArea';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import cls from './Rating.module.scss';

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
    const { t } = useTranslation();

    const feedbackContent = (
        <>
            <Text
                title={feedbackTitle}
            />
            <TextArea
                value={textFeedback}
                onChange={setTextFeedBack}
                rows={5}
                data-testid="Rating.text"
            />
        </>
    );

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

    return (
        <VStack
            className={classNames(cls.Rating, {}, [className])}
            data-testid="Rating"
        >
            <Text title={title} />
            {isLoading
                ? (
                    <Skeleton
                        height={50}
                        width={290}
                        border="12px"
                    />
                )
                : (
                    <StarRating
                        size={50}
                        value={isLoading ? 0 : selectStar}
                        onChange={onSelectStarHandler}
                    />
                )}
            <BrowserView>
                <Modal
                    isOpen={modalOpen}
                    onClose={onCloseModal}
                    className={cls.modalFeedback}
                >
                    {feedbackContent}
                    <Button
                        onClick={onSubmitFeedbackHandler}
                        data-testid="Rating.send"
                    >
                        {t('Send')}
                    </Button>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={modalOpen}
                    onClose={onCloseModal}
                    heightPercent={50}
                >
                    {feedbackContent}
                    <Button
                        onClick={onSubmitFeedbackHandler}
                        data-testid="Rating.send"
                    >
                        {t('Send')}
                    </Button>
                </Drawer>
            </MobileView>
        </VStack>
    );
});
