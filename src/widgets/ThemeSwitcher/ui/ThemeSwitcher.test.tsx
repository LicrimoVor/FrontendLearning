import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeSwitcher } from '..';

describe('ThemeSwitcher', () => {
    test('Test switch button', () => {
        const { getByTestId } = render(<ThemeSwitcher />);
        const button = getByTestId('theme-switcher-button');
        // expect(button).to;
        fireEvent.click(button);
        screen.debug(button);
    });
});
