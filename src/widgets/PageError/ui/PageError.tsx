import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

/** Вывод информации об ошибке */
export const PageError: FC<PageErrorProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    const refreshPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('Error')}</p>
            <Button onClick={refreshPage}>
                {t('Refresh')}
            </Button>
        </div>
    );
};
