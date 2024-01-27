import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoudarie';
import { Counter } from 'entities/Counter';
import { Page } from 'widgets/Page';

/** Главная страница */
const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main page')}
            <BugButton />
            <Counter />
        </Page>
    );
};

export default MainPage;
