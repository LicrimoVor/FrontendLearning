import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

/** Панель админа */
const AdminPanelPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="AdminPanelPage">
            {t('Admin panel')}
        </Page>
    );
};

export default memo(AdminPanelPage);
