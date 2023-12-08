import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

/** Переключатель стилей */
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, hundlerTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={hundlerTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
