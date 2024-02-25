import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

/** Недостаточно прав */
const ForbiddenPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('You are not authorized to view this page')}
        </Page>
    );
};

export default memo(ForbiddenPage);
