import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui/Text/Text';
import { ArticleDetail } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { fetchCommentsByAcrticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailCommentsReducer, getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const redusers: ReducerList = {
    articleDetailComments: articleDetailCommentsReducer,
};

/** Полная статья с подробностями */
const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-detail');
    const dispath = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    useInitialEffect(() => {
        dispath(fetchCommentsByAcrticleId(id));
    });

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                {t('ArticleNotFound')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticleDetailPage, {}, [className])}
            >
                <ArticleDetail id={id} />
                <Text
                    title={t('Comments')}
                    className={cls.commentTitle}
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailPage);
