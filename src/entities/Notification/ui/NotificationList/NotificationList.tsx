import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { toggleFeatures } from '@/shared/lib/features';

import { useNotificationList } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string,
    inverted?: boolean,
}

/** Список уведомлений */
export const NotificationList: FC<NotificationListProps> = memo((props: NotificationListProps) => {
    const {
        className,
        inverted,
    } = props;

    const { t } = useTranslation();
    const { data, isLoading, error } = useNotificationList(5, {
        pollingInterval: 10000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesigned,
    });

    if (isLoading) {
        return (
            <VStack gap={12} className={className}>
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
                <Skeleton height={57} width="100%" border="10px" />
            </VStack>
        );
    }

    if (error) {
        return <Text theme={TextTheme.ERROR} title={t('Error')} />;
    }

    return (
        <VStack max gap={12} className={className}>
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    data={notification}
                    inverted={inverted}
                />
            ))}
        </VStack>
    );
});
