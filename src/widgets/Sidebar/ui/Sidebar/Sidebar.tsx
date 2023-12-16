import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

/** Боковая панель */
export const Sidebar: FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const hundlerCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-wrap-button"
                onClick={hundlerCollapsed}
                className={cls.wrap}
                theme={ButtonTheme.OUTLINE}
                inverted
            >
                {t('Wrap')}
            </Button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={classNames(cls.lang, { [cls.collapsed]: collapsed })} />
            </div>
        </div>
    );
};
