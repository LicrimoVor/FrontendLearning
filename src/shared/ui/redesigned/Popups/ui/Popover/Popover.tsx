import {
    CSSProperties, FC, memo, ReactNode,
} from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Button } from '../../../Button';
import { PopupDirectionConvert } from '../../styles/consts';
import { PopupDirection } from '../../styles/types';
import cls from './Popover.module.scss';
import popupsCls from '../../styles/popups.module.scss';

type PopoverMarginTopMenu = '8px' | '10px' | '12px';

const MapMarginTopClasses: Record<PopoverMarginTopMenu, string> = {
    '8px': 'margin_8px',
    '10px': 'margin_10px',
    '12px': 'margin_12px',
};

interface PopoverProps {
    trigger?: ReactNode,
    children?: ReactNode,
    className?: string,
    direction?: PopupDirection,
    height?: string,
    autoScroll?: boolean,
    marginTopMenu?:PopoverMarginTopMenu
}

/**
 * Тот же дроп-даун, но с любым внутренним содержимым
 */
export const Popover: FC<PopoverProps> = memo((props: PopoverProps) => {
    const {
        className,
        children,
        trigger,
        direction = 'bottom right',
        height,
        autoScroll,
        marginTopMenu,
    } = props;

    const panelClasses = [
        PopupDirectionConvert[direction],
        popupsCls.popupMenu,
        marginTopMenu && cls[MapMarginTopClasses[marginTopMenu]],
    ];

    const styles: CSSProperties = {
        height,
        overflowY: autoScroll ? 'scroll' : undefined,
    };

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupsCls.Popup])}>
            <HPopover.Button as="div">
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                style={styles}
                className={classNames(cls.menu, {}, panelClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
