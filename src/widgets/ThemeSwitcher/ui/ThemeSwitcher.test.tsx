import { fireEvent, render, screen } from '@testing-library/react';

import { Theme } from 'app/providers/ThemeProvider';
import * as theme from 'app/providers/ThemeProvider/lib/useTheme';
import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    it('Test switch button', () => {
        const func = jest.spyOn(theme, 'useTheme').mockReturnValue({
            theme: Theme.DARK,
            hundlerTheme: jest.fn(),
        });
        const { getByTestId } = render(<ThemeSwitcher />);
        const button = getByTestId('theme-switcher-button');
        // expect(button).to;
        fireEvent.click(button);
        // screen.debug(button);
        expect(func).toBeCalled();
    });
});
