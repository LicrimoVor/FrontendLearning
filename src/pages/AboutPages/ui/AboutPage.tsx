import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

/** Об проекте */
const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <Text text={t('About page')} />
        </Page>
    );
};

export default AboutPage;
