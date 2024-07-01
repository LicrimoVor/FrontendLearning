import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TilesIconDeprecated from '@/shared/assets/icons/field.svg';
import ListIcon from '@/shared/assets/icons/list_redesigned.svg';
import TilesIcon from '@/shared/assets/icons/field_redesigned.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
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
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => TilesIconDeprecated,
            on: () => TilesIcon,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => ListIconDeprecated,
            on: () => ListIcon,
        }),
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <HStack
                    className={classNames(cls.ArticleViewSwitcher, {}, [className])}
                    data-testid="ArticleViewSwitcher"
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                            key={viewType.view}
                            data-testid={`ArticleViewSwitcher.${viewType.view}`}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                }, [])}
                                size={24}
                            />
                        </ButtonDeprecated>
                    ))}
                </HStack>
            )}
            on={(
                <Card
                    className={classNames(cls.ArticleViewSwitcherRedesigned, {}, [className])}
                    data-testid="ArticleViewSwitcher"
                    border="round"
                >
                    <HStack
                        gap={16}
                    >
                        {viewTypes.map((viewType) => (
                            <Icon
                                aria-labelledby={`article-view-${viewType.view}`}
                                onClick={onClick(viewType.view)}
                                key={viewType.view}
                                data-testid={`ArticleViewSwitcher.${viewType.view}`}
                                clickable
                                Svg={viewType.icon}
                                className={classNames(cls.view, {
                                    [cls.notSelected]: viewType.view !== view,
                                }, [])}
                                size={24}
                            />
                        ))}
                    </HStack>
                </Card>
            )}
        />

    );
});
