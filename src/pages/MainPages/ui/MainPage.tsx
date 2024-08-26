import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/redesigned/Button';
import { unregister } from '@/shared/lib/serviceWorker';
import { Rating } from '@/entities/Rating';
import { GreetingModal } from '@/features/GreetingModal';
import { CodeRunnerJs } from '@/features/CodeRunnerJs';
import { CodeRunnerPy } from '@/features/CodeRunnerPy';
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
            <Button onClick={() => unregister()}>{t('unregister')}</Button>
            {/* <CodeRunnerJs template="static" height={500} /> */}
            <CodeRunnerPy />
        </Page>
    );
};

export default MainPage;
