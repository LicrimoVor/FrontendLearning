import { BugButton } from 'app/providers/ErrorBoudarie';
import { useTranslation } from 'react-i18next';

/** Главная страница */
function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Main page')}
            <BugButton />
        </div>
    );
}

export default MainPage;
