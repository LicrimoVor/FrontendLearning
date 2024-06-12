import { FC, memo, useState } from 'react';

import { Coordinate } from '@/shared/types/canvas';
import { ArticleCanvas } from '@/features/Article/ArticleCanvas';
import { Page } from '@/widgets/Page';

/** Страница с бесконечным полем статей */
export const ArticleCanvasPage: FC = memo(() => {
    const [offset, setOffset] = useState<Coordinate>({
        x: 0.0,
        y: 0.0,
    });

    return (
        <Page>
            <ArticleCanvas />
        </Page>
    );
});
