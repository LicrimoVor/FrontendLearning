import { fireEvent } from '@testing-library/react';

import { renderWithRouter } from '@/shared/lib/tests/renderWithRouter';
import AppLink, { AppLinkTheme } from './AppLink';

describe('AppLink', () => {
    test('Test jump to', () => {
        const { getByText } = renderWithRouter(
            <AppLink to="/test">
                Test
            </AppLink>,
        );
        const link = getByText('Test');
        fireEvent.click(link);
        expect(window.location.href).toEqual('http://localhost/test');
    });

    test('Test theme', () => {
        const { getByText } = renderWithRouter(
            <AppLink to="/" className={AppLinkTheme.PRIMARY}>
                Test
            </AppLink>,
        );
        expect(getByText('Test')).toHaveClass('primary');
    });
});
