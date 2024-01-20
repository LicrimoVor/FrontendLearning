import {
    FC, memo, useCallback, Suspense,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CreateCommentForm } from 'features/CreateComment';
import { Loader } from 'shared/ui/Loader/Loader';
import { Button } from 'shared/ui/Button/Button';
import { ArticleDetail } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { fetchCommentsByAcrticleId } from '../../model/services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailCommentsReducer, getArticleComments } from '../../model/slice/articleDetailCommentsSlice';
import cls from './ArticleDetailPage.module.scss';
import { sendCommentForArticle } from '../../model/services/createCommentForArticle/sendCommentForArticle';

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
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();

    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    useInitialEffect(() => {
        dispatch(fetchCommentsByAcrticleId(id));
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
                <div
                    className={classNames(cls.ArticleDetailPage, {}, [className])}
                >
                    <Button onClick={onBackToList}>
                        {t('ReturnToList')}
                    </Button>
                    <ArticleDetail id={id} />
                    <Text
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
                </div>
            </DynamicModuleLoader>
        </Suspense>
    );
};

export default memo(ArticleDetailPage);
