import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import cls from './CodeConsoleElement.module.scss';

interface CodeConsoleElementProps {
    className?: string,
    method?: string,
    data?: string
}

/** Елемент в выводе консоли */
export const CodeConsoleElement: FC<CodeConsoleElementProps> = memo((
    props: CodeConsoleElementProps,
) => {
    const {
        className,
        method,
        data,
    } = props;

    return (

        <pre
            translate="no"
            className={classNames(cls.ConsoleElement, {}, [method, className])}
        >
            <code>
                {data}
            </code>
        </pre>
    );
});
