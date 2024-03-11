import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

/** Страница для редактирования статьи */
const ArticleEditPage: FC = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    const isEdit = Boolean(id);

    return (
        <Page>
            {isEdit
                ? t('EditArticleById') + id
                : t('CreateNewArticle')}
        </Page>
    );
};

export default memo(ArticleEditPage);
