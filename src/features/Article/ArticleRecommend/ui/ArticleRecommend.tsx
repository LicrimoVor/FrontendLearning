import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './ArticleRecommend.module.scss';
import { useArticleRecommendList } from '../api/articleRecommendApi';

interface ArticleRecommendProps {
    className?: string
}

/** Список рекомендованных статей */
export const ArticleRecommend: FC<ArticleRecommendProps> = memo((
    props: ArticleRecommendProps,
) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article/recommend');

    const { data: articles, error, isLoading } = useArticleRecommendList(5);

    if (error) {
        return <Text text={t('Blia')} />;
    }

    return (
        <VStack max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Recommend')}
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
});
