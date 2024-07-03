import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getArticleDetailData } from '@/entities/Article';

export const useGetMetaData = () => {
    const data = useSelector(getArticleDetailData);
    const { t } = useTranslation('article');

    return {
        title: data?.title || t('Article detail'),
        description: data ? `${t('PET-project. Article detail')} - ${data.title}` : t('PET-project. Article detail'),
    };
};
