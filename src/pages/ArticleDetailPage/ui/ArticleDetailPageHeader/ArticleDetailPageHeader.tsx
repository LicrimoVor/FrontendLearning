import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getArticleDetailData } from 'entities/Article';
import { getArticleCanEdit } from '../../model/selectors/canEdit';
import cls from './ArticleDetailPageHeader.module.scss';

interface ArticleDetailPageHeaderProps {
    className?: string
}

/** Хедер для страницы с детальным просмотром статьи */
export const ArticleDetailPageHeader: FC<ArticleDetailPageHeaderProps> = memo((
    props: ArticleDetailPageHeaderProps,
) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-detail');
    const navigate = useNavigate();
    const canEdit = useSelector(getArticleCanEdit);
    const article = useSelector(getArticleDetailData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [navigate, article]);

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('ReturnToList')}
            </Button>
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}
        </div>
    );
});
