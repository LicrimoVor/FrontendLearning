import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';

import { getArticleDetailData, getArticleDetailError, getArticleDetailIsLoadnig } from '../../model/selectors/articleDetails';
import { fetchArticleDetailById } from '../../model/services/fetchArticleDetailById/fetchArticleDetailById';
import { articleDetailReducer } from '../../model/slice/articleSlice';
import { ArticleDetailDeprecated } from './ArticleDetailDeprecated';
import { ArticleDetailRedesigned } from './ArticleDetailRedesigned';

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
    const article = useSelector(getArticleDetailData);
    const isLoading = useSelector(getArticleDetailIsLoadnig);
    const error = useSelector(getArticleDetailError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleDetailById(articleId));
        }
    }, [dispatch, articleId]);

    const data = {
        className,
        article,
        isLoading,
        error,
    };

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<ArticleDetailDeprecated {...data} />}
                on={<ArticleDetailRedesigned {...data} />}
            />
        </DynamicModuleLoader>
    );
});
