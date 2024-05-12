import {
    FC, Fragment, memo, ReactNode,
} from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink } from '../../../AppLink';
import { Button, ButtonTheme } from '../../../Button';
import { PopupDirection } from '../../styles/types';
import { PopupDirectionConvert } from '../../styles/consts';
import cls from './Dropdown.module.scss';
import popupsCls from '../../styles/popups.module.scss';

interface DropdownItem {
    component: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    href?: string,
}

interface DropdownProps {
    className?: string,
    data: DropdownItem[],
    label: ReactNode,
    direction?: PopupDirection,
}

/**
 * @deprecated
 * Всплывающее меню
 */
export const Dropdown: FC<DropdownProps> = memo((props: DropdownProps) => {
    const {
        className,
        data,
        label,
        direction = 'bottom right',
    } = props;

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button
                as={Button}
                theme={ButtonTheme.CLEAR}
            >
                {label}
            </Menu.Button>
            <Menu.Items
                className={classNames(popupsCls.popupMenu, {}, [PopupDirectionConvert[direction]])}
            >
                {data.map((item, indx) => {
                    const content = ({ active }: {active: boolean}) => {
                        const mods = {
                            [cls.active]: active,
                        };

                        return (
                            <Button
                                theme={ButtonTheme.CLEAR}
                                inverted
                                onClick={item.onClick}
                                disabled={item.disabled}
                                className={classNames(cls.item, mods, [])}
                            >
                                {item.component}
                            </Button>
                        );
                    };

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={indx}
                                refName="href"
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={indx}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
