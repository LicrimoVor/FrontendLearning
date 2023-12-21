import { fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('Test value', () => {
        const { getByTestId } = componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('Test btn increment', () => {
        const { getByTestId } = componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const btn = getByTestId('counter-increment');
        fireEvent.click(btn);
        expect(getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('Test btn decrement', () => {
        const { getByTestId } = componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const btn = getByTestId('counter-decrement');
        fireEvent.click(btn);
        expect(getByTestId('counter-value')).toHaveTextContent('9');
    });
});
