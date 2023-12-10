import { render, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('first', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
