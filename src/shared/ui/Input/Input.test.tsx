import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Input } from './Input';

describe('Input', () => {
    test('Test render', () => {
        componentRender(<Input />);
    });
});
