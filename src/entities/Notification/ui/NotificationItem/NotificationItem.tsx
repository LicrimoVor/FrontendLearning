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
    inverted?: boolean,
}

/** Отображение одного уведомления */
export const NotificationItem: FC<NotificationItemProps> = memo((props: NotificationItemProps) => {
    const {
        className,
        data,
        inverted,
    } = props;

    const Item = useCallback(() => (
        <Text
            className={cls.item}
            title={data.title}
            text={data.description}
            theme={inverted ? TextTheme.INVERTED_COMBINE : TextTheme.PRIMARY}
        />
    ), [data, inverted]);

    const mods = useMemo(() => ({
        [cls.href]: Boolean(data.href),
        [cls.inverted]: inverted,
    }), [data, inverted]);

    return (
        <div
            className={classNames(cls.NotificationItem, mods, [className])}
        >
            {data.href
                ? (
                    <AppLink
                        to={data.href}
                        inverted
                    >
                        <Item />
                    </AppLink>
                )
                : <Item />}

        </div>
    );
});
