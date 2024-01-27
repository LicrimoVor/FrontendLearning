import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string,
  short?: boolean,
}

/** Кнопка переключения языка */
export const LangSwitcher: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
    const {
        className,
        short,
    } = props;

    const { t, i18n } = useTranslation();

    const hundler = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            data-testid="lang-switcher"
            onClick={hundler}
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.OUTLINE}
            inverted
        >
            {t(short ? 'Lang' : 'Languege')}
        </Button>
    );
});
