import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoudarie';
import { Page } from 'widgets/Page';

/** Главная страница */
const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main page')}
            <BugButton />
        </Page>
    );
};

export default MainPage;
