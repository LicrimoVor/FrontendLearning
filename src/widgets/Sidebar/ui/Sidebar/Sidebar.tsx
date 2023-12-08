import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string
}

/** Боковая панель */
export const Sidebar: FC<SidebarProps> = (props) => {
  
  const {
    className,
    ...otherProps
  } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {t} = useTranslation();

  const hundlerCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div 
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
      <Button
        onClick={hundlerCollapsed}
      >
        {t('Wrap')}
      </Button>
      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
