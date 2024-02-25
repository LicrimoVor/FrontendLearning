import {
    FC, memo, useCallback, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import NotificationSvg from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer';
import { BrowserView, MobileView } from 'shared/ui/View';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './NotificationBtn.module.scss';

interface NotificationBtnProps {
    className?: string,
}

/** Кнопка уведомления */
export const NotificationBtn: FC<NotificationBtnProps> = memo((props: NotificationBtnProps) => {
    const {
        className,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = <Icon inverted Svg={NotificationSvg} />;

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    height="250px"
                    autoScroll
                    trigger={trigger}
                >
                    <NotificationList className={cls.browserContent} inverted />
                </Popover>
            </BrowserView>
            <MobileView>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpen}
                    className={classNames('', {}, [className])}
                    inverted
                >
                    {trigger}
                </Button>
                <Drawer
                    onClose={onClose}
                    isOpen={isOpen}
                >
                    <NotificationList className={cls.mobileContent} />
                </Drawer>
            </MobileView>
        </>
    );
});
