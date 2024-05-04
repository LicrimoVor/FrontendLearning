import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Rating } from '@/entities/Rating';
import { GreetingModal } from '@/features/GreetingModal';
import { Page } from '@/widgets/Page';

/** Главная страница */
const MainPage: FC = () => {
    const { t } = useTranslation('main');

    const [id, setId] = useState(0);

    return (
        <Page data-testid="MainPage">
            {t('Main page')}
            <Rating
                title={t('Оцените сайт')}
                selectStar={id}
                onSelectStar={setId}
                feedback
                feedbackTitle={t('Оцените что то')}
            />
            <GreetingModal />
        </Page>
    );
};

export default MainPage;
