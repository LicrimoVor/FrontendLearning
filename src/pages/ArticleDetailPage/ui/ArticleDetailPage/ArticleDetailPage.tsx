import {
    FC, memo, useCallback, Suspense,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CreateCommentForm } from 'features/CreateComment';
import { Loader } from 'shared/ui/Loader/Loader';
import { Button } from 'shared/ui/Button/Button';
import { ArticleDetail, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { getArticleDetailRecommendIsLoading } from '../../model/selectors/recommend';
import { articleDetailPageReducer } from '../../model/slice';
import { fetchCommentsByAcrticleId } from '../../model/services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import { sendCommentForArticle } from '../../model/services/createCommentForArticle/sendCommentForArticle';
import { getArticleRecommend } from '../../model/slice/articleDetailRecommendSlice';
import { fetchArticlesRecommend } from '../../model/services/fetchArticlesRecommend/fetchArticlesRecommend';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const redusers: ReducerList = {
    articleDetailPage: articleDetailPageReducer,
};

/** Полная статья с подробностями */
const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article-detail');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendArticles = useSelector(getArticleRecommend.selectAll);
    const recommendIsLoading = useSelector(getArticleDetailRecommendIsLoading);
    const navigate = useNavigate();

    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    useInitialEffect(() => {
        dispatch(fetchCommentsByAcrticleId(id));
        dispatch(fetchArticlesRecommend());
    });

    const onCommentSend = useCallback((text: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

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
        <Suspense fallback={<Loader />}>
            <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
                <Page
                    className={classNames(cls.ArticleDetailPage, {}, [className])}
                >
                    <Button onClick={onBackToList}>
                        {t('ReturnToList')}
                    </Button>
                    <ArticleDetail id={id} />
                    <Text
                        size={TextSize.L}
                        title={t('Comments')}
                        className={cls.commentTitle}
                    />
                    <CreateCommentForm
                        onCommentSend={onCommentSend}
                    />
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                    <Text
                        size={TextSize.L}
                        title={t('Recommend')}
                        className={cls.recommendTitle}
                    />
                    <ArticleList
                        articles={recommendArticles}
                        isLoading={recommendIsLoading}
                        className={cls.recommendArticles}
                        target="_blank"
                    />
                </Page>
            </DynamicModuleLoader>
        </Suspense>
    );
};

export default memo(ArticleDetailPage);
