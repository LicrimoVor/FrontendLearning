import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

/** Кнопка для тестирования ошибок */
export const BugButton: FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={() => setError(!error)}>
            {t('ThrowError')}
        </Button>
    );
};
