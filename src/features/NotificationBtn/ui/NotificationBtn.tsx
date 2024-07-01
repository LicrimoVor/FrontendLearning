import {
    FC, memo, useCallback, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationSvgDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationSvgRedesigned from '@/shared/assets/icons/notification_redesigned.svg';
import { Popover as PopoverDeprevated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { BrowserView, MobileView } from '@/shared/ui/redesigned/View';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover as PopoverRedesigned } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { NotificationList } from '@/entities/Notification';

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

    const Trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpen}
                    className={classNames(cls.trigger, {}, [className])}
                    inverted
                >
                    <IconDeprecated
                        theme="inverted"
                        Svg={NotificationSvgDeprecated}
                        size={20}
                    />
                </Button>
            )}
            on={(
                <Icon
                    aria-labelledby="notification"
                    Svg={NotificationSvgRedesigned}
                    size={30}
                    clickable
                    onClick={onOpen}
                    className={classNames(cls.trigger, {}, [className])}
                />
            )}
        />
    );

    return (
        <>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={(
                        <PopoverDeprevated
                            className={classNames('', {}, [className])}
                            direction="bottom left"
                            height="250px"
                            autoScroll
                            trigger={Trigger}
                        >
                            <NotificationList className={cls.browserContent} inverted />
                        </PopoverDeprevated>
                    )}
                    on={(
                        <PopoverRedesigned
                            className={classNames('', {}, [className])}
                            direction="bottom left"
                            height="250px"
                            autoScroll
                            trigger={Trigger}
                            marginTopMenu="10px"
                        >
                            <NotificationList className={cls.browserContent} inverted />
                        </PopoverRedesigned>
                    )}

                />

            </BrowserView>
            <MobileView>
                {Trigger}
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
