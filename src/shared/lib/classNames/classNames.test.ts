import { classNames } from './classNames';

describe('classNames', () => {
    test('only 1 param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('additional class', () => {
        const expected = 'someClass class1 class2';

        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('mods true true', () => {
        const expected = 'someClass class1 class2 hovered scrollable';

        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('mods true false', () => {
        const expected = 'someClass class1 class2 hovered';

        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('additional and mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';

        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
