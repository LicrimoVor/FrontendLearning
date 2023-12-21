import { fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { renderWithRouter } from 'shared/lib/tests/renderWithRouter/renderWithRouter';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test button wrap', () => {
        const { getByTestId } = componentRender(<Sidebar />);
        const wrapButton = getByTestId('sidebar-wrap-button');
        expect(wrapButton).toBeInTheDocument();
        expect(getByTestId('sidebar')).not.toHaveClass('collapsed');
        fireEvent.click(wrapButton);
        expect(getByTestId('sidebar')).toHaveClass('collapsed');
    });

    test('Test main link', () => {
        const { getByTestId } = renderWithRouter(<Sidebar />);
        const link = getByTestId('main-link');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/');
    });

    test('Test about link', () => {
        const { getByTestId } = renderWithRouter(<Sidebar />);
        const link = getByTestId('about-link');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/about');
    });
});
