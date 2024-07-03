import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye_redesigned.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { getRouteArticleDetails } from '@/shared/const/route';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import DefaultImg from '@/shared/assets/icons/ghost_happy.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { UserAvatar } from '@/entities/User';

import { IArticleNode } from '../../model/types/article';
import { ArticleNodeSize } from '../../model/consts/article';
import cls from './ArticleNode.module.scss';

interface ArticleNodeProps {
    className?: string,
    article: IArticleNode,
    target?: HTMLAttributeAnchorTarget,
    isLoading?: boolean,
    onClickBtn?: () => void,
}

/** Отображение самой статьи на главном экране */
export const ArticleNode: FC<ArticleNodeProps> = memo((
    props: ArticleNodeProps,
) => {
    const {
        className,
        article,
        target,
        onClickBtn,
        isLoading,
    } = props;

    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <Card
                className={classNames(cls.ArticleNode, {}, [className])}
                style={ArticleNodeSize}
                data-testid="ArticleNode"
            >
                <HStack max>
                    <Skeleton height={30} width={120} />
                </HStack>
                <Skeleton height={200} width={200} />
                <VStack gap={4} max>
                    <Skeleton height={24} width={120} />
                    <HStack justify="spaceBetween" max>
                        <Skeleton height={24} width={80} />
                        <Skeleton height={24} width={40} />
                    </HStack>
                    <Skeleton height={44} width={130} />
                </VStack>
            </Card>
        );
    }

    return (
        <Card
            className={classNames(cls.ArticleNode, {}, [className])}
            data-testid="ArticleNode"
            style={ArticleNodeSize}
        >
            <HStack max>
                <UserAvatar
                    className={cls.user}
                    user={article.user}
                    viewUsername
                    draggable={false}
                />
            </HStack>

            <AppImage
                fallback={<Skeleton width={200} height={200} />}
                src={article.img}
                className={cls.img}
                alt={article.title}
                width={200}
                height={200}
                draggable={false}
                errorFallback={<Icon Svg={DefaultImg} size={200} />}
            />
            <VStack gap={4} max>
                <Text text={article.title} />
                <HStack justify="spaceBetween" max>
                    <Text
                        text={article.createdAt}
                    />
                    <HStack gap={8}>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article.views)} />
                    </HStack>
                </HStack>

                <AppLink
                    target={target}
                    to={getRouteArticleDetails(article.id)}
                    onClick={onClickBtn}
                    draggable={false}
                >
                    <Button variant="outline">
                        {t('Read more')}
                    </Button>
                </AppLink>
            </VStack>
        </Card>
    );
});
