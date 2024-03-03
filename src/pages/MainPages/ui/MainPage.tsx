import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BugButton } from '@/app/providers/ErrorBoudarie';
import { Page } from '@/widgets/Page';
import { Rating } from '@/entities/Rating';

/** Главная страница */
const MainPage: FC = () => {
    const { t } = useTranslation('main');

    const [id, setId] = useState(0);

    return (
        <Page>
            {t('Main page')}
            <BugButton />
            <Rating
                title="Оцените сайт"
                selectStar={id}
                onSelectStar={setId}
                feedback
                feedbackTitle="Оцените что то"
            />
        </Page>
    );
};

export default MainPage;
