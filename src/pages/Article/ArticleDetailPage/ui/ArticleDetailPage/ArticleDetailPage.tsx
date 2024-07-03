import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { MetaData } from '@/shared/lib/components/MetaData';
import { ArticleDetail } from '@/entities/Article';
import { ArticleRecommend } from '@/features/Article/ArticleRecommend';
import { ArticleCommentForm } from '@/features/Article/ArticleCommentForm';
import { ArticleRating } from '@/features/Article/ArticleRating';
import { Page } from '@/widgets/Page';

import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { ArticleDetailContainer } from '../ArticleDetailContainer/ArticleDetailContainer';
import { useGetMetaData } from '../../lib/useGetMetaData';
import cls from './ArticleDetailPage.module.scss';

/** Полная статья с подробностями */
const ArticleDetailPage: FC = () => {
    const { t } = useTranslation('article');
    let { id } = useParams<{ id: string }>();

    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) {
        return (
            <div
                className={cls.ArticleDetailPage}
            >
                {t('Article not found')}
            </div>
        );
    }

    return (
        <Page
            className={cls.ArticleDetailPage}
            data-testid="ArticleDetailPage"
        >
            <MetaData useGetMeta={useGetMetaData} />
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <VStack gap={32} max>
                        <ArticleDetailPageHeader />
                        <ArticleDetail articleId={id} />
                        <ToggleFeatures
                            feature="isArticleRatingEnabled"
                            off={<CardDeprecated>{t('There will be a rating soon')}</CardDeprecated>}
                            on={<ArticleRating articleId={id} className={cls.rating} />}
                        />
                        <ArticleCommentForm articleId={id} />
                        <ArticleRecommend />
                    </VStack>
                )}
                on={(
                    <StickyContentLayout
                        content={(
                            <VStack gap={32} max>
                                <ArticleDetailContainer id={id} />
                                <ArticleRating articleId={id} className={cls.rating} />
                                <ArticleCommentForm articleId={id} />
                                <ArticleRecommend />
                            </VStack>
                        )}
                        right={<AdditionalInfoContainer />}
                    />

                )}
            />
        </Page>
    );
};

export default memo(ArticleDetailPage);
