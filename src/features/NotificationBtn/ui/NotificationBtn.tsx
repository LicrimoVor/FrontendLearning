import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import NotificationSvg from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationBtn.module.scss';

interface NotificationBtnProps {
    className?: string,
}

/** Кнопка уведомления */
export const NotificationBtn: FC<NotificationBtnProps> = memo((props: NotificationBtnProps) => {
    const {
        className,
    } = props;

    return (
        <Popover
            className={classNames(cls.NotificationBtn, {}, [className])}
            direction="bottom left"
            trigger={<NotificationSvg />}
        >
            <NotificationList />
        </Popover>

    );
});
