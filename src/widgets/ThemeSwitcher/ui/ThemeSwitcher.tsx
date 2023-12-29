import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme, Theme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
  className?: string
}

/** Переключатель стилей */
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, hundlerTheme } = useTheme();

    return (
        <Button
            data-testid="theme-switcher-button"
            className={classNames('', {}, [className])}
            onClick={hundlerTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
