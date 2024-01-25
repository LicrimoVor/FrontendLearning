import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list.svg';
import TilesIcon from 'shared/assets/icons/field.svg';
import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon';
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
        <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});
