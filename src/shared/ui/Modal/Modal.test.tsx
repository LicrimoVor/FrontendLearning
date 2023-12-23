import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Modal } from './Modal';

describe('Modal', () => {
    test('Test render', () => {
        componentRender(<Modal />);
    });
});
