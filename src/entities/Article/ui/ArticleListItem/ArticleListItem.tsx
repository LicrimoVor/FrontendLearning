import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getRouteArticleDetails } from '@/shared/const/route';
import { AppLink } from '@/shared/ui/AppLink';

import { Article, ArticleBlockText } from '../../model/types/article';
import { ArticleView, ArticleBlockType } from '../../model/consts/article';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    onClickBtn?: () => void,
}

/** Отображение самой статьи на главном экране */
export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
        onClickBtn,
    } = props;

    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                            alt={article.user.username}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.createdAt}
                        />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleBlockTextComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                            onClick={onClickBtn}
                        >
                            <Button
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('ReadMore')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            to={getRouteArticleDetails(article.id)}
            onClick={onClickBtn}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
