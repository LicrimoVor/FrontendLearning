import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string,
}

/** Панель админа */
const AdminPanelPage: FC<AdminPanelPageProps> = (props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Adminka')}
        </Page>
    );
};

export default memo(AdminPanelPage);
