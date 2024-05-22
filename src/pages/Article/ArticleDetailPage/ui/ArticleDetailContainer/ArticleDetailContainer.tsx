import { FC, memo } from 'react';

import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetail } from '@/entities/Article';

interface ArticleDetailContainerProps {
    className?: string,
    id: string,
}

/** Контейнер с содержимым статьи */
export const ArticleDetailContainer: FC<ArticleDetailContainerProps> = memo((
    props: ArticleDetailContainerProps,
) => {
    const {
        className,
        id,
    } = props;

    return (
        <Card className={className} max>
            <ArticleDetail articleId={id} />
        </Card>
    );
});
