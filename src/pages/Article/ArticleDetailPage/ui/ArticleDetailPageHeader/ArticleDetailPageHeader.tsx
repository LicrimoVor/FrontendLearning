import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { getRouteArticleEdit, getRouteArticleList } from '@/shared/const/route';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getArticleDetailData } from '@/entities/Article';

import { getArticleCanEdit } from '../../model/selectors/canEdit';

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
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getArticleCanEdit);
    const article = useSelector(getArticleDetailData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticleList());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [navigate, article]);

    return (
        <HStack
            className={classNames('', {}, [className])}
            justify="spaceBetween"
            max
            data-testid="ArticleDetailPageHeader"
        >
            <Button onClick={onBackToList}>
                {t('Return to list')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}
        </HStack>
    );
});
