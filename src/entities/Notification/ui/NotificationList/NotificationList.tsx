import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
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

    if (isLoading) {
        return (
            <VStack gap={4} className={className}>
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
        <div className={className}>
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    data={notification}
                    inverted={inverted}
                />
            ))}
        </div>
    );
});
