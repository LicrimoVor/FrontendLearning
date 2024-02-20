import {
    FC, memo, useCallback, useMemo,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string,
    data: Notification,
}

/** Отображение одного уведомления */
export const NotificationItem: FC<NotificationItemProps> = memo((props: NotificationItemProps) => {
    const {
        className,
        data,
    } = props;

    const Item = useCallback(() => (
        <Text
            className={cls.item}
            title={data.title}
            text={data.description}
            theme={TextTheme.INVERTED_COMBINE}
        />
    ), [data]);

    const mods = useMemo(() => ({
        [cls.href]: Boolean(data.href),
    }), [data]);

    return (
        <div
            className={classNames(cls.NotificationItem, mods, [className])}
        >
            {data.href
                ? (
                    <AppLink
                        to={data.href}
                    >
                        <Item />
                    </AppLink>
                )
                : <Item />}

        </div>
    );
});
