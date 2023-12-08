import { FC } from "react";
import { useTranslation } from "react-i18next";

import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface LangSwitcherProps {
  className?: string
}

/** Кнопка переключения языка */
export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  
  const {
    className,
    ...otherProps
  } = props;

  const {t, i18n} = useTranslation();

  const hundler = () => {
    i18n.changeLanguage(i18n.language === 'ru'? 'en': 'ru')
  }

  
  return (
      <Button 
        onClick={hundler}
        className={classNames(cls.LangSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
      >
        {t("Lang")}
      </Button>
  )
}
