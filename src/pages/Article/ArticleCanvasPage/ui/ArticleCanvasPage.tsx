import { FC, memo } from 'react';

import { ArticleCanvas } from '@/features/Article/ArticleCanvas';
import { Page } from '@/widgets/Page';

/** Страница с бесконечным полем статей */
const ArticleCanvasPage: FC = () => (
    <Page>
        <ArticleCanvas />
    </Page>
);

export default memo(ArticleCanvasPage);
