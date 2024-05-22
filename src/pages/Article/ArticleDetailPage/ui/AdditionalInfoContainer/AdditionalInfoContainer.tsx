import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Card } from '@/shared/ui/redesigned/Card';
import { classNames } from '@/shared/lib/classNames';
import { getRouteArticleEdit } from '@/shared/const/route';
import { getArticleDetailData, getArticleDetailIsLoadnig } from '@/entities/Article';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import { getArticleCanEdit } from '../../model/selectors/canEdit';
import cls from './AdditionalInfoContainer.module.scss';

interface AdditionalInfoContainerProps {
    className?: string,
}

/** Контейнер с дополнительной информацией */
export const AdditionalInfoContainer: FC<AdditionalInfoContainerProps> = memo((
    props: AdditionalInfoContainerProps,
) => {
    const {
        className,
    } = props;
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoadnig);
    const navigate = useNavigate();
    const canEdit = useSelector(getArticleCanEdit);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [navigate, article]);

    return (
        <Card
            className={classNames(cls.AdditionalInfoContainer, {}, [className])}
            padding={20}
            border="round"
        >
            <ArticleAdditionalInfo
                article={article}
                onEdit={onEditArticle}
                canEdit={canEdit}
                isLoading={isLoading}
            />
        </Card>
    );
});
