import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import RedIcon from '@/shared/assets/icons/theme-red.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/lib/context/ThemeContext';

interface ThemeSwitcherProps {
  className?: string
}

const IconTheme = {
    [Theme.DARK]: <LightIcon />,
    [Theme.LIGHT]: <RedIcon />,
    [Theme.RED]: <DarkIcon />,
};

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
            {IconTheme[theme]}
        </Button>
    );
});
