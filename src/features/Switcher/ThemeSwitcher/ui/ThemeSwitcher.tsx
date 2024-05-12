import { FC, memo, useCallback } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { saveJsonSettings } from '@/entities/User';

import { ThemeSwitcherDep } from './ThemeSwitcherDep';
import { ThemeSwitcherRed } from './ThemeSwitcherRed';

interface ThemeSwitcherProps {
  className?: string
}

/**
 * Переключатель стилей
 */
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, hundlerTheme } = useTheme();
    const dispath = useAppDispatch();

    const changeTheme = useCallback(() => {
        hundlerTheme((nowTheme) => {
            dispath(saveJsonSettings({ theme: nowTheme }));
        });
    }, [hundlerTheme, dispath]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ThemeSwitcherDep changeTheme={changeTheme} theme={theme} className={className} />}
            on={<ThemeSwitcherRed changeTheme={changeTheme} theme={theme} className={className} />}
        />
    );
});
