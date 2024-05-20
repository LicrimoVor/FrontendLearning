import { FC, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { ArticleView } from '../../model/consts/article';
import cls from './ArticleItemSkeleton.module.scss';

interface ArticleItemSkeletonProps {
    className?: string,
    view: ArticleView,
}

/** Скелетон для статьи */
export const ArticleItemSkeleton: FC<ArticleItemSkeletonProps> = memo((
    props: ArticleItemSkeletonProps,
) => {
    const {
        className,
        view,
    } = props;

    const Skeleton = useMemo(() => toggleFeatures({
        name: 'isAppRedesigned',
        off: () => SkeletonDeprecated,
        on: () => SkeletonRedesigned,
    }), []);

    const Card = useMemo(() => toggleFeatures({
        name: 'isAppRedesigned',
        off: () => CardDeprecated,
        on: () => CardRedesigned,
    }), []);

    if (view === ArticleView.BIG) {
        return (

            <ToggleFeatures
                feature="isAppRedesigned"
                off={(
                    <div className={classNames(cls.ArticleSkeleton, {}, [className, cls[view]])}>
                        <Card>
                            <div className={cls.header}>
                                <Skeleton width={30} height={30} border="50%" />
                                <Skeleton width={150} height={32} className={cls.username} />
                                <Skeleton width={100} height={16} className={cls.createdAt} />
                            </div>
                            <Skeleton width={250} height={32} className={cls.title} />
                            <Skeleton height={200} className={cls.img} />
                            <div className={cls.footer}>
                                <Skeleton height={32} width={200} />
                            </div>
                        </Card>
                    </div>
                )}
                on={(
                    <Card
                        max
                        className={classNames('', {}, [className, cls[view]])}
                        padding={20}
                    >
                        <VStack max gap={12}>
                            <HStack gap={8} max>
                                <Skeleton width={30} height={30} border="50%" />
                                <Skeleton width={100} height={24} />
                            </HStack>
                            <Skeleton width={80} height={24} />
                            <Skeleton width={200} height={18} />
                            <Skeleton width="100%" height={420} />
                            <Skeleton width="100%" height={72} />
                            <HStack max justify="spaceBetween">
                                <Skeleton width={120} height={38} />
                                <Skeleton width={50} height={24} />
                            </HStack>
                        </VStack>
                    </Card>
                )}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <div className={classNames(
                    cls.ArticleSkeletonDeprecatedSmall,
                    {},
                    [className],
                )}
                >
                    <Card>
                        <div className={cls.imageWrapper}>
                            <Skeleton width={200} height={200} className={cls.img} />
                        </div>
                        <div className={cls.infoWrapper}>
                            <Skeleton width={130} height={16} />
                        </div>
                        <Skeleton width={150} height={16} className={cls.title} />
                    </Card>
                </div>
            )}
            on={(
                <Card className={classNames(
                    cls.ArticleSkeletonRedesignedSmall,
                    {},
                    [className],
                )}
                >
                    <Skeleton width="100%" height={200} />
                    <VStack className={cls.info} gap={4}>
                        <Skeleton width={100} height={24} className={cls.title} />
                        <HStack justify="spaceBetween" max>
                            <Skeleton width={50} height={24} className={cls.date} />
                            <Skeleton width={80} height={24} />
                        </HStack>
                        <HStack>
                            <Skeleton width={30} height={30} border="50%" />
                        </HStack>
                    </VStack>
                </Card>
            )}
        />

    );
});
