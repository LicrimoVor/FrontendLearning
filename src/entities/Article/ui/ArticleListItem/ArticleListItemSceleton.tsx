import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSceletonProps {
    className?: string,
    view: ArticleView,
}

/** Докстринг */
export const ArticleListItemSceleton: FC<ArticleListItemSceletonProps> = memo((
    props: ArticleListItemSceletonProps,
) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            border="50%"
                        />
                        <Skeleton
                            width={150}
                            height={32}
                            className={cls.username}
                        />
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.createdAt}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={32}
                        className={cls.title}
                    />
                    <Skeleton
                        height={200}
                        className={cls.img}
                    />
                    <div className={cls.footer}>
                        <Skeleton
                            height={32}
                            width={200}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
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
    );
});
