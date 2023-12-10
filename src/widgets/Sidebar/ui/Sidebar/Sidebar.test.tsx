import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        const { getByTestId } = renderWithTranslation(<Sidebar />);
        expect(getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test button wrap', () => {
        const { getByTestId } = renderWithTranslation(<Sidebar />);
        const wrapButton = getByTestId('sidebar-wrap-button');
        expect(wrapButton).toBeInTheDocument();
        expect(getByTestId('sidebar')).not.toHaveClass('collapsed');
        fireEvent.click(wrapButton);
        expect(getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
