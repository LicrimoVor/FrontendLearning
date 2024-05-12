import {
    FC, memo, useCallback, useMemo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

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

    const mods = useMemo(() => ({
        [cls.href]: Boolean(data.href),
        [cls.inverted]: inverted,
    }), [data, inverted]);

    const Item = useCallback(() => (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <CardDeprecated
                    theme={CardTheme.OUTLINE}
                    className={classNames(cls.NotificationItem, mods, [className])}
                >
                    <TextDeprecated
                        title={data.title}
                        text={data.description}
                        theme={inverted ? TextTheme.INVERTED_COMBINE : TextTheme.PRIMARY}
                    />
                </CardDeprecated>
            )}
            on={(
                <Card
                    className={classNames(
                        cls.NotificationItemRedesigned,
                        mods,
                        [className],
                    )}
                >
                    <Text
                        size="s"
                        className={cls.item}
                        text={data.description}
                        title={data.title}
                    />
                </Card>
            )}
        />

    ), [data, inverted, mods, className]);

    if (data.href) {
        return (
            <a
                className={cls.link}
                href={data.href}
            >
                <Item />
            </a>
        );
    }

    return <Item />;
});
