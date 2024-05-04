import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card } from '@/shared/ui/Card';
import { toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetail } from '@/entities/Article';
import { ArticleRecommend } from '@/features/Article/ArticleRecommend';
import { ArticleCommentForm } from '@/features/Article/ArticleCommentForm';
import { ArticleRating } from '@/features/Article/ArticleRating';
import { Page } from '@/widgets/Page';

import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailPage.module.scss';

/** Полная статья с подробностями */
const ArticleDetailPage: FC = () => {
    const { t } = useTranslation('article-detail');

    let { id } = useParams<{ id: string }>();
    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) {
        return (
            <div
                className={cls.ArticleDetailPage}
            >
                {t('ArticleNotFound')}
            </div>
        );
    }
    const toggleFeature = toggleFeatures(
        {
            name: 'isArticleRatingEnabled',
            off: () => <Card>{t('Скоро будет рейтинг')}</Card>,
            on: () => <ArticleRating articleId={id!} className={cls.rating} />,
        },
    );

    return (
        <Page
            className={cls.ArticleDetailPage}
            data-testid="ArticleDetailPage"
        >
            <VStack gap={32} max>
                <ArticleDetailPageHeader />
                <ArticleDetail articleId={id} />
                {toggleFeature}
                <ArticleCommentForm articleId={id} />
                <ArticleRecommend />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailPage);
