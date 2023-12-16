import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
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
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        data-testid="main-link"
                        to={RoutePath.main}
                        inverted
                    >
                        <MainIcon className={classNames(cls.icon, {}, [cls.primary])} />
                        <span className={cls.link}>
                            {t('Main')}
                        </span>
                    </AppLink>
                </div>

                <div className={cls.item}>
                    <AppLink
                        data-testid="about-link"
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDERY}
                        inverted
                    >
                        <AboutIcon className={classNames(cls.icon, {}, [cls.secondary])} />
                        <span className={cls.link}>
                            {t('About')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={classNames(cls.lang, { [cls.collapsed]: collapsed })}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
