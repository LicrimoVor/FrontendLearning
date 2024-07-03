import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { MetaData } from '@/shared/lib/components/MetaData';
import { Page } from '@/widgets/Page';

/** Об проекте */
const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <MetaData title={t('About page')} description={t('PET-project. About page')} />
            <Text text={t('About page')} />
        </Page>
    );
};

export default AboutPage;
