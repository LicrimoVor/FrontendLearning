import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/redesigned/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';

import { fetchArticleCanvas } from '../../model/services/fetchArticleCanvas';
import { getArticleCanvasHasMore, getArticleCanvasIsLoading } from '../../model/selectors/articleCanvas';

interface ArticleNodeFetchProps {
    className?: string,
}

/** Узел подрузки статей */
export const ArticleNodeFetch: FC <ArticleNodeFetchProps> = memo((
    props: ArticleNodeFetchProps,
) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const hasMore = useSelector(getArticleCanvasHasMore);
    const isLoading = useSelector(getArticleCanvasIsLoading);

    const onClick = useCallback(() => {
        dispatch(fetchArticleCanvas());
    }, [dispatch]);

    if (!hasMore) {
        return (
            <Card className={className}>
                <Text text={t('There are no articles left')} />
            </Card>

        );
    }

    if (isLoading) {
        return (
            <Card className={className}>
                <Skeleton width={100} height={44} />
            </Card>
        );
    }

    return (
        <Card className={className}>
            <Button onClick={onClick}>
                {t('Add more')}
            </Button>
        </Card>
    );
});
