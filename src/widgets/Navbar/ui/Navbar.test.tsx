import { fireEvent } from '@testing-library/react';

import { renderWithRouter } from 'shared/lib/tests/renderWithRouter/renderWithRouter';
import { Navbar } from './Navbar';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {}),
        },
    }),
}));

describe('Navbar', () => {
    test('Test main link', () => {
        const { getByTestId } = renderWithRouter(<Navbar />);
        const link = getByTestId('main-link');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/');
    });

    test('Test about link', () => {
        const { getByTestId } = renderWithRouter(<Navbar />, { route: '/about' });
        const link = getByTestId('about-link');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/about');
    });
});
