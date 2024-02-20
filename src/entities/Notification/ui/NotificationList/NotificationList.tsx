import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useNotificationList } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string,
}

/** Список уведомлений */
export const NotificationList: FC<NotificationListProps> = memo((props: NotificationListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const { data, isLoading, error } = useNotificationList(5, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap={4}>
                <Skeleton height={57} width={250} border="10px" />
                <Skeleton height={57} width={250} border="10px" />
                <Skeleton height={57} width={250} border="10px" />
                <Skeleton height={57} width={250} border="10px" />
                <Skeleton height={57} width={250} border="10px" />
            </VStack>
        );
    }

    if (error) {
        return <Text theme={TextTheme.ERROR} title={t('beda')} />;
    }

    return (
        <div className={classNames('', {}, [className])}>
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    data={notification}
                />
            ))}
        </div>
    );
});
