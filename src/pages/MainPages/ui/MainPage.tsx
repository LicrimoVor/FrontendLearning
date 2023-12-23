import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoudarie';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

/** Главная страница */
const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Main page')}
            <BugButton />
            <Counter />
            <Input placeholder="hello" />
        </div>
    );
};

export default MainPage;
