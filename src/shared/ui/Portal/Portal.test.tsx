import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Portal } from './Portal';

describe('Protal', () => {
    test('Test create Portal', () => {
        componentRender(
            <div>
                <Portal>test</Portal>
            </div>,

        );
        const portal = screen.getByText('test');
        expect(portal.parentElement.nodeName).toEqual('HTML');
    });
});
