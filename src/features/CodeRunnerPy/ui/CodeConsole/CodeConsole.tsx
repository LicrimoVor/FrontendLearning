import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import cls from './CodeConsole.module.scss';

interface CodeConsoleProps {
    className?: string,
    data: string[],
}

/** Консоль */
export const CodeConsole: FC<CodeConsoleProps> = memo((props: CodeConsoleProps) => {
    const {
        className,
        data,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CodeConsole, {}, [className])}>
            {t('test')}
        </div>
    );
});
