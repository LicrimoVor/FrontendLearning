import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { UserAvatar } from '@/entities/User';

import { renderArticleBlock } from './renderArticleBlock';
import { Article } from '../../model/types/article';
import cls from './ArticleDetail.module.scss';

interface ArticleDetailRedesignedProps {
    className?: string,
    article?: Article,
    isLoading?: boolean,
    error?: string,
}

/** Подробная информация о статье и сама статья */
export const ArticleDetailRedesigned: FC<ArticleDetailRedesignedProps> = memo((
    props: ArticleDetailRedesignedProps,
) => {
    const {
        className,
        article,
        isLoading,
        error,
    } = props;

    const { t } = useTranslation('article');

    if (isLoading || article === undefined) {
        return (
            <VStack
                gap={12}
                max
                className={classNames('', {}, [className])}
            >
                <HStack gap={8} max>
                    <Skeleton height={32} width={32} border="50%" />
                    <Skeleton height={24} width={100} />
                </HStack>
                <Skeleton height={32} width="100%" />
                <Skeleton height={24} width="100%" />
                <Skeleton height={420} width="100%" border="16px" />
                <Skeleton height={200} width="100%" />
                <Skeleton height={200} width="100%" />
            </VStack>
        );
    }
    if (error) {
        return (
            <Text
                title={t('Error loading the article')}
                align="center"
                variant="error"
                className={classNames('', {}, [className])}
            />
        );
    }

    return (
        <VStack
            gap={12}
            max
            className={classNames('', {}, [className])}
            data-testid="ArticleDetail"
        >
            <HStack gap={8}>
                <UserAvatar user={article.user} viewUsername />
                <Text
                    text={article.createdAt}
                />
            </HStack>
            <Text
                title={article.title}
                text={article.subtitle}
                size="l"
            />
            <HStack max justify="center">
                <AppImage
                    fallback={<Skeleton width="100%" height={420} border="16px" />}
                    src={article.img}
                    className={cls.img}
                />
            </HStack>
            {article?.blocks.map(renderArticleBlock)}
        </VStack>
    );
});
