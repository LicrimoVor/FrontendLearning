import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Rating.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { BrowserView, MobileView } from '@/shared/ui/View';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Drawer } from '@/shared/ui/Drawer';
import { Button } from '@/shared/ui/Button/Button';
import { TextArea } from '@/shared/ui/TextArea';
import { Skeleton } from '@/shared/ui/Skeleton';

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
        <VStack className={classNames(cls.Rating, {}, [className])}>
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
                    >
                        {t('Send')}
                    </Button>
                </Drawer>
            </MobileView>
        </VStack>
    );
});
