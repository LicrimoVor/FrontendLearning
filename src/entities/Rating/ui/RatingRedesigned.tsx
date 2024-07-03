import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
import { BrowserView, MobileView } from '@/shared/ui/redesigned/View';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Button } from '@/shared/ui/redesigned/Button';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { TextArea } from '@/shared/ui/redesigned/TextArea';

import cls from './Rating.module.scss';

interface RatingRedesignedProps {
    className?: string,
    title?: string,
    modalOpen?: boolean,
    onCloseModal?: () => void,
    isLoading?: boolean,
    selectStar?: number,
    onSelectStar?: (star: number) => void,

    onSubmitFeedback?: () => void,
    feedbackTitle?: string,
    textFeedback?: string,
    setTextFeedBack?: (text: string) => void,
}

/**
 * Карточка рейтинга
 */
export const RatingRedesigned: FC<RatingRedesignedProps> = memo((
    props: RatingRedesignedProps,
) => {
    const {
        className,
        title,
        onSubmitFeedback,
        modalOpen,
        onCloseModal,
        isLoading,
        selectStar,
        onSelectStar,
        feedbackTitle,
        textFeedback,
        setTextFeedBack,
    } = props;

    const { t } = useTranslation();

    const feedbackContent = (
        <VStack gap={12} max>
            <Text
                textTag="label"
                htmlFor={feedbackTitle || title || 'feedback'}
                title={feedbackTitle}
            />
            <TextArea
                id={feedbackTitle || title || 'feedback'}
                value={textFeedback}
                onChange={setTextFeedBack}
                rows={5}
                data-testid="Rating.text"
            />
        </VStack>
    );

    return (
        <VStack
            className={classNames(cls.Rating, {}, [className])}
            data-testid="Rating"
            gap={8}
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
                        onChange={onSelectStar}
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
                        onClick={onSubmitFeedback}
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
                        onClick={onSubmitFeedback}
                        data-testid="Rating.send"
                    >
                        {t('Send')}
                    </Button>
                </Drawer>
            </MobileView>
        </VStack>
    );
});
