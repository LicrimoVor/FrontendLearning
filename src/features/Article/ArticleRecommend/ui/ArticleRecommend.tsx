import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleList } from '@/entities/Article';

import { useArticleRecommendList } from '../api/articleRecommendApi';
import cls from './ArticleRecommend.module.scss';

interface ArticleRecommendProps {
    className?: string
}

/** Список рекомендованных статей */
const ArticleRecommend: FC<ArticleRecommendProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-detail');

    const { data: articles, error, isLoading } = useArticleRecommendList(5);

    if (error) {
        return <Text text={t('Error')} />;
    }

    return (
        <VStack
            max
            className={classNames('', {}, [className])}
            data-testid="ArticleRecommend"
            gap={8}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Recommend')}
                    />
                )}
                on={(
                    <Text
                        size="l"
                        title={t('Recommend')}
                    />
                )}
            />

            <ArticleList
                className={classNames(cls.articleRecommend, {}, [className])}
                articles={articles}
                isLoading={isLoading}
                target="_blank"
                countSceleton={5}
            />
        </VStack>
    );
};

export default memo(ArticleRecommend);
