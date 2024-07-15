import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import EyeIcon from '@/shared/assets/icons/eye_redesigned.svg';
import CalednarIcon from '@/shared/assets/icons/calendar_redesigned.svg';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Article } from '@/entities/Article';
import { UserAvatar } from '@/entities/User';

interface ArticleAdditionalInfoProps {
    className?: string,
    article?: Article,
    canEdit: boolean,
    isLoading?: boolean,
    onEdit: () => void,
}

/** Дополнительная информация к статье */
export const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = memo((
    props: ArticleAdditionalInfoProps,
) => {
    const {
        className,
        article,
        canEdit,
        onEdit,
        isLoading = true,
    } = props;

    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <VStack
                className={className}
                gap={12}
            >
                <HStack gap={8}>
                    <Skeleton width={32} height={32} border="50%" />
                    <Skeleton width={100} height={24} />
                </HStack>
                <Skeleton width={100} height={24} />
                <Skeleton width={150} height={44} />
                <Skeleton width={100} height={24} />
            </VStack>
        );
    }

    if (!article) {
        return <div>123</div>;
    }

    return (
        <VStack
            className={className}
            gap={12}
        >
            <HStack gap={8}>
                <UserAvatar user={article.user} viewUsername />
            </HStack>
            <HStack gap={8}>
                <Icon Svg={CalednarIcon} />
                <Text text={article.createdAt} />
            </HStack>
            <HStack gap={8}>
                <Icon Svg={EyeIcon} />
                <Text text={t('{{count}} Views', { count: article.views })} />
            </HStack>
            {canEdit && <Button onClick={onEdit}>{t('Edit')}</Button>}
        </VStack>
    );
});
