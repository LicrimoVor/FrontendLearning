import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotificationList: builder.query<Notification[], number>({
            query: (limit: number = 5) => ({
                url: '/notifications',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useNotificationList = notificationApi.useGetNotificationListQuery;
