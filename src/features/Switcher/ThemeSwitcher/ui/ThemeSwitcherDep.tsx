import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import RedIcon from '@/shared/assets/icons/theme-red.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Theme } from '@/shared/lib/context/ThemeContext';
import { Icon } from '@/shared/ui/deprecated/Icon';

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
 * @deprecated
 * Переключатель стилей
 */
export const ThemeSwitcherDep: FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
    const {
        className,
        changeTheme,
        theme,
    } = props;

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
                theme="inverted"
            />
        </Button>
    );
});
