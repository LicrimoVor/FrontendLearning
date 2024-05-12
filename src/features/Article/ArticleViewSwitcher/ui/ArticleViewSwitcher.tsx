import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import TilesIcon from '@/shared/assets/icons/field.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleView } from '@/entities/Article';

import cls from './ArticleViewSwitcher.module.scss';

interface articleViewSwitcherProps {
    className?: string,
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void,
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TilesIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

/** Компонент, который меняет тип отображения статей (view) */
export const ArticleViewSwitcher: FC<articleViewSwitcherProps> = memo((
    props: articleViewSwitcherProps,
) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <HStack
            className={classNames(cls.ArticleViewSwitcher, {}, [className])}
            data-testid="ArticleViewSwitcher"
        >
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                    data-testid={`ArticleViewSwitcher.${viewType.view}`}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        }, [])}
                        size={24}
                    />
                </Button>
            ))}
        </HStack>
    );
});
