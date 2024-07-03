import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/userInitialEffect';
import { ToggleFeatures } from '@/shared/lib/features';
import { CommentList, CreateCommentForm } from '@/entities/Comment';

import { getArticleCommentError, getArticleCommentIsLoading } from '../model/selectors/comments';
import { articleCommentReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { sendCommentForArticle } from '../model/services/sendCommentsForArticle/sendCommentForArticle';
import { fetchCommentsByAcrticleId } from '../model/services/fetchCommentsByAcrticleId/fetchCommentsByAcrticleId';
import cls from './ArticleCommentForm.module.scss';

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

    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentIsLoading);
    const error = useSelector(getArticleCommentError);

    const onCommentSend = useCallback((text: string) => {
        if (text.length < 5) {
            return;
        }

        dispatch(sendCommentForArticle(
            { text, articleId },
        ));
    }, [dispatch, articleId]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByAcrticleId(articleId));
    });

    if (error) {
        return <Text text={t('Error')} />;
    }

    return (
        <DynamicModuleLoader reducers={redusers}>
            <VStack
                max
                gap={8}
                className={classNames('', {}, [className])}
                data-testid="ArticleCommentForm"
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={(
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Comments')}
                            className={cls.commentTitle}
                        />
                    )}
                    on={(
                        <Text
                            size="l"
                            title={t('Comments')}
                            className={cls.commentTitle}
                        />
                    )}
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
