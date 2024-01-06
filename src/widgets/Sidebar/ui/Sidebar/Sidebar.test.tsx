import { fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

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
});
