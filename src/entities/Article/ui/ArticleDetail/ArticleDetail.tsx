import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
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
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { getArticleDetailData, getArticleDetailError, getArticleDetailIsLoadnig } from '../../model/selectors/articleDetails';
import { fetchArticleDetailById } from '../../model/services/fetchArticleDetailById/fetchArticleDetailById';
import { articleDetailReducer } from '../../model/slice/articleSlice';
import { ArticleBlockCodeComponent } from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import { ArticleBlockImageComponent } from '../ArticleBlockImageComponent/ArticleBlockImageComponent';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import cls from './ArticleDetail.module.scss';

interface ArticleDetailProps {
    className?: string,
    id: string,
}

const reducers: ReducerList = {
    articleDetail: articleDetailReducer,
};

/** Подробная информация о статье и сама статья */
export const ArticleDetail: FC<ArticleDetailProps> = memo((props: ArticleDetailProps) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation('article-detail');
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoadnig);
    const error = useSelector(getArticleDetailError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleDetailById(id));
        }
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleBlockCodeComponent
                    className={cls.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleBlockImageComponent
                    className={cls.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleBlockTextComponent
                    className={cls.block}
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
            <>
                <Skeleton className={cls.avatar} border="50%" width={200} height={200} />
                <Skeleton className={cls.title} height={32} width={300} />
                <Skeleton className={cls.skeleton} height={24} width={600} />
                <Skeleton className={cls.skeleton} height={200} width="100%" />
                <Skeleton className={cls.skeleton} height={200} width="100%" />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('ArticleErrorInLoading')}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text
                        text={String(article?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text
                        text={article?.createdAt}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div
                className={classNames(cls.ArticleDetail, {}, [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
