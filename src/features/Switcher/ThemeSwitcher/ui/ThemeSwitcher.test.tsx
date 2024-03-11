import { fireEvent, render } from '@testing-library/react';

import * as theme from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/lib/context/ThemeContext';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    it('Test switch button', () => {
        const func = jest.spyOn(theme, 'useTheme').mockReturnValue({
            theme: Theme.DARK,
            hundlerTheme: jest.fn(),
        });
        const { getByTestId } = render(<ThemeSwitcher />);
        const button = getByTestId('theme-switcher-button');

        fireEvent.click(button);

        expect(func).toBeCalled();
    });
});
