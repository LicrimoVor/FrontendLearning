import { FC, memo } from 'react';

import { ArticleViewSwitcher } from '@/features/Article/ArticleViewSwitcher';

import { useViewSwitcher } from '../../lib/hook/useViewSwitcher';

interface ViewSwitcherContainerProps {
    className?: string,
}

/** Переключатель изменения отображения статей */
export const ViewSwitcherContainer: FC<ViewSwitcherContainerProps> = memo((
    props: ViewSwitcherContainerProps,
) => {
    const {
        className,
    } = props;

    const {
        view,
        onViewClick,
    } = useViewSwitcher();

    return (
        <ArticleViewSwitcher
            className={className}
            data-testid="ArticlePageFilter"
            view={view}
            onViewClick={onViewClick}
        />

    );
});
