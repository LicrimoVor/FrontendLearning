import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye_redesigned.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/route';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { ArticleBlockText } from '../../model/types/article';
import { ArticleView, ArticleBlockType } from '../../model/consts/article';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';
import { ArticleListItemProps } from './ArticleListItem';
import cls from './ArticleListItemRedesigned.module.scss';

/** Отображение самой статьи на главном экране */
export const ArticleListItemRedesigned: FC<ArticleListItemProps> = memo((
    props: ArticleListItemProps,
) => {
    const {
        className,
        article,
        view,
        target,
        onClickBtn,
    } = props;

    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} />;
    const views = (
        <HStack gap={8}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;
        return (
            <Card
                max
                className={classNames('', {}, [className, cls[view]])}
                data-testid="ArticleListItem.BIG"
                padding={20}
            >
                <VStack max gap={12}>
                    <HStack gap={8} max>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                            alt={article.user.username}
                        />
                        <Text
                            text={article.user.username}
                            bold
                        />
                        <Text
                            text={article.createdAt}
                        />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={282} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify="spaceBetween">
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                            onClick={onClickBtn}
                        >
                            <Button variant="outline">
                                {t('ReadMore')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            to={getRouteArticleDetails(article.id)}
            onClick={onClickBtn}
            data-testid="ArticleListItem.SMALL"
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
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
