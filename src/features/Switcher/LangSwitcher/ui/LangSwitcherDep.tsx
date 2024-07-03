import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
    onClick: () => void,
}

/**
 * @deprecated
 *  Кнопка переключения языка
 */
export const LangSwitcherDep: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
    const {
        className,
        short,
        onClick,
    } = props;

    const { t } = useTranslation();

    return (
        <Button
            data-testid="lang-switcher"
            onClick={onClick}
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.OUTLINE}
            inverted
        >
            {short ? t('Lang') : t('Language')}
        </Button>
    );
});
