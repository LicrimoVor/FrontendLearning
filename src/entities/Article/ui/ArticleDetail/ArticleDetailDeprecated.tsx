import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { renderArticleBlock } from './renderArticleBlock';
import { Article } from '../../model/types/article';

interface ArticleDetailDeprecatedProps {
    className?: string,
    article?: Article,
    isLoading?: boolean,
    error?: string,
}

/**
 * @deprecated
 * Подробная информация о статье и сама статья
 */
export const ArticleDetailDeprecated: FC<ArticleDetailDeprecatedProps> = memo((
    props: ArticleDetailDeprecatedProps,
) => {
    const {
        className,
        article,
        isLoading,
        error,
    } = props;

    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <VStack
                gap={12}
                max
                className={classNames('', {}, [className])}
            >
                <HStack max justify="center">
                    <Skeleton border="50%" width={200} height={200} />
                </HStack>
                <Skeleton height={32} width={300} />
                <Skeleton height={24} width={600} />
                <Skeleton height={200} width="100%" />
                <Skeleton height={200} width="100%" />
            </VStack>
        );
    }
    if (error) {
        return (
            <Text
                title={t('Error loading the article')}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
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
            <HStack max justify="center">
                <Avatar
                    size={200}
                    src={article?.img}
                />
            </HStack>
            <Text
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />
            <HStack>
                <Icon Svg={EyeIcon} />
                <Text
                    text={String(article?.views)}
                />
            </HStack>
            <HStack>
                <Icon Svg={CalendarIcon} />
                <Text
                    text={article?.createdAt}
                />
            </HStack>
            {article?.blocks.map(renderArticleBlock)}
        </VStack>
    );
});
