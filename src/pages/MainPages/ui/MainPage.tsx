import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoudarie';

/** Главная страница */
const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Main page')}
            <BugButton />
        </div>
    );
};

export default MainPage;
