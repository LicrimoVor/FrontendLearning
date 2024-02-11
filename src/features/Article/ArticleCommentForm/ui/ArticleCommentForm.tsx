import { CreateCommentForm } from 'features/CreateComment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { useInitialEffect } from 'shared/lib/hooks/userInitialEffect/userInitialEffect';
import { getArticleCommentError, getArticleCommentIsLoading } from '../model/selectors/comments';
import { articleCommentReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { sendCommentForArticle } from '../model/services/sendCommentsForArticle/sendCommentForArticle';
import cls from './ArticleCommentForm.module.scss';
import { fetchCommentsByAcrticleId } from '../model/services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';

const redusers: ReducerList = {
    articleComments: articleCommentReducer,
};

interface ArticleCommentFormProps {
    className?: string,
    articleId?: string,
}

/** Форма с комментариями статьи */
export const ArticleCommentForm: FC<ArticleCommentFormProps> = memo((
    props: ArticleCommentFormProps,
) => {
    const {
        className,
        articleId,
    } = props;

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentIsLoading);
    const error = useSelector(getArticleCommentError);
    const { t } = useTranslation('article/comments');

    const onCommentSend = useCallback((text: string) => {
        dispatch(sendCommentForArticle(
            { text, articleId },
        ));
    }, [dispatch, articleId]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByAcrticleId(articleId));
    });

    if (error) {
        return <Text text={t('WasHappenedExcept')} />;
    }

    return (
        <DynamicModuleLoader reducers={redusers}>
            <VStack max gap={8} className={classNames('', {}, [className])}>
                <Text
                    size={TextSize.L}
                    title={t('Comments')}
                    className={cls.commentTitle}
                />
                <CreateCommentForm
                    onCommentSend={onCommentSend}
                />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
