import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import RedIcon from '@/shared/assets/icons/theme-red.svg';
import { Button } from '@/shared/ui/redesigned/Button';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string,
    changeTheme: () => void,
    theme: Theme,
}

const IconTheme = {
    [Theme.DARK]: LightIcon,
    [Theme.LIGHT]: RedIcon,
    [Theme.RED]: DarkIcon,
};
/**
 * Переключатель стилей
 */
export const ThemeSwitcherRed: FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
    const {
        className,
        changeTheme,
        theme,
    } = props;

    return (
        <Icon
            Svg={IconTheme[theme]}
            size={24}
            clickable
            aria-labelledby="Theme switcher"
            onClick={changeTheme}
            data-testid="theme-switcher-button"
            className={classNames('', {}, [className])}
        />
    );
});
