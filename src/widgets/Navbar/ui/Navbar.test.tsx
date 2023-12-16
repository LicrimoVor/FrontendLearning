import { fireEvent } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
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
        const { getByTestId } = componentRender(<Navbar />);
        const link = getByTestId('main-link');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/');
    });

    test('Test about link', () => {
        const { getByTestId } = componentRender(<Navbar />, { route: '/about' });
        const link = getByTestId('about-link');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/about');
    });
});
