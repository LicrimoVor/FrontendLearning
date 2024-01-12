import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail } from 'entities/Article';

import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

/** Полная статья с подробностями */
const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-detail');
    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                {t('ArticleNotFound')}
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleDetailPage, {}, [className])}
        >
            <ArticleDetail id={id} />
        </div>
    );
};

export default memo(ArticleDetailPage);
