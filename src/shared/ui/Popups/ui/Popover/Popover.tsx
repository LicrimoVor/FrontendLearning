import { FC, memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../../Button/Button';
import cls from './Popover.module.scss';
import popupsCls from '../../styles/popups.module.scss';
import { PopupDirectionConvert } from '../../styles/consts';
import { PopupDirection } from '../../styles/types';

interface PopoverProps {
    trigger?: ReactNode,
    children?: ReactNode,
    className?: string,
    direction?: PopupDirection,
}

/** Тот же дроп-даун, но с любым внутренним содержимым */
export const Popover: FC<PopoverProps> = memo((props: PopoverProps) => {
    const {
        className,
        children,
        trigger,
        direction = 'bottom right',
    } = props;

    const panelClasses = [
        PopupDirectionConvert[direction],
        popupsCls.popupMenu,
    ];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupsCls.Popup])}>
            <HPopover.Button as={Button} theme={ButtonTheme.CLEAR}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(cls.menu, {}, panelClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
