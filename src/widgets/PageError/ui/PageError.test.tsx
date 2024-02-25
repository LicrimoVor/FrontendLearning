import { fireEvent } from '@testing-library/react';
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { PageError } from './PageError';

describe('PageError', () => {
    test('Test button reload', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        });
        const { getByTestId } = renderWithTranslation(<PageError />);

        fireEvent.click(getByTestId('button-reload'));
        expect(window.location.reload).toBeCalled();
    });
});
