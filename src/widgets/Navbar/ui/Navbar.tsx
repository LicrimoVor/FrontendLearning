import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Nabvar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

/** Верхнея фигня */
export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}> 
        <AppLink
          theme={AppLinkTheme.SECONDERY}
          to={'/'}
          inverted={true}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink
          to={'/about'}
          inverted={true}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  )
}
