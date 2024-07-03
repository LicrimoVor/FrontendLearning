import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { MetaData } from '@/shared/lib/components/MetaData';
import { Page } from '@/widgets/Page';

/** Страница для редактирования статьи */
const ArticleEditPage: FC = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    const isEdit = Boolean(id);

    return (
        <Page>
            <MetaData title={t('Article edit')} description={t('PET-project. Editing an article')} />
            {isEdit
                ? `${t('Edit article by id')} ${id}`
                : t('Create new article')}
        </Page>
    );
};

export default memo(ArticleEditPage);
