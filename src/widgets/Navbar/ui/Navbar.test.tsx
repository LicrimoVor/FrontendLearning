import { fireEvent } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Test render', () => {
        const { getByText } = componentRender(<Navbar />);
        expect(getByText('LogIn')).toBeInTheDocument();
    });
});
