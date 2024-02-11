import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { getArticleDetailData, getArticleDetailError, getArticleDetailIsLoadnig } from '../../model/selectors/articleDetails';
import { fetchArticleDetailById } from '../../model/services/fetchArticleDetailById/fetchArticleDetailById';
import { articleDetailReducer } from '../../model/slice/articleSlice';
import { ArticleBlockCodeComponent } from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import { ArticleBlockImageComponent } from '../ArticleBlockImageComponent/ArticleBlockImageComponent';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';

interface ArticleDetailProps {
    className?: string,
    articleId: string,
}

const reducers: ReducerList = {
    articleDetail: articleDetailReducer,
};

/** Подробная информация о статье и сама статья */
export const ArticleDetail: FC<ArticleDetailProps> = memo((props: ArticleDetailProps) => {
    const {
        className,
        articleId,
    } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation('article-detail');
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoadnig);
    const error = useSelector(getArticleDetailError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleDetailById(articleId));
        }
    }, [dispatch, articleId]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleBlockCodeComponent
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleBlockImageComponent
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleBlockTextComponent
                    block={block}
                    key={block.id}
                />
            );
        default:
            return null;
        }
    }, []);

    let content;
    if (isLoading) {
        content = (
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
    } else if (error) {
        content = (
            <Text
                title={t('ArticleErrorInLoading')}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                className={classNames('', {}, [className])}
            />
        );
    } else {
        content = (
            <VStack
                gap={12}
                max
                className={classNames('', {}, [className])}
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
                {article?.blocks.map(renderBlock)}
            </VStack>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            {content}
        </DynamicModuleLoader>
    );
});
