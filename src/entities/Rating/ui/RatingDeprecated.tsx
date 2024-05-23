import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { BrowserView, MobileView } from '@/shared/ui/redesigned/View';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Button } from '@/shared/ui/deprecated/Button';
import { TextArea } from '@/shared/ui/deprecated/TextArea';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import cls from './Rating.module.scss';

interface RatingDeprecatedProps {
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
 * @deprecated
 * Карточка рейтинга
 */
export const RatingDeprecated: FC<RatingDeprecatedProps> = memo((
    props: RatingDeprecatedProps,
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
