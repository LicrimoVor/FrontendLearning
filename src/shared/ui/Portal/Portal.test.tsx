import { render } from '@testing-library/react';
import * as reactDom from 'react-dom';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Portal } from './Portal';

describe('Protal', () => {
    test('Test create Portal', () => {
        const func = jest.spyOn(reactDom, 'createPortal');
        componentRender(<Portal>test</Portal>);
        expect(func).toBeCalled();
    });
});
