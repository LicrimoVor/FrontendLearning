import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Check type button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test').getAttribute('type')).toEqual('button');
    });
    test('Test clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });

    test('Test outline', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('outline');
    });
});
