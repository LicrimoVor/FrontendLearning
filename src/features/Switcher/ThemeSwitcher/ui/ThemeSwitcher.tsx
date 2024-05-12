import { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import RedIcon from '@/shared/assets/icons/theme-red.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme, nextTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { toggleFeatures } from '@/shared/lib/features';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
  className?: string
}

const IconTheme = {
    [Theme.DARK]: LightIcon,
    [Theme.LIGHT]: RedIcon,
    [Theme.RED]: DarkIcon,
};

/** Переключатель стилей */
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, hundlerTheme } = useTheme();
    const dispath = useAppDispatch();

    const changeTheme = useCallback(() => {
        hundlerTheme((nowTheme) => {
            dispath(saveJsonSettings({ theme: nowTheme }));
        });
    }, [hundlerTheme, dispath]);

    return (
        <Button
            data-testid="theme-switcher-button"
            className={classNames('', {}, [className])}
            onClick={changeTheme}
            theme={ButtonTheme.CLEAR}
        >
            <Icon
                Svg={IconTheme[theme]}
                size={24}
                theme={toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => 'inverted',
                    on: () => undefined,
                })}
            />
        </Button>
    );
});
