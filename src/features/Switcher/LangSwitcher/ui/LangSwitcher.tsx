import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';

import { LangSwitcherDep } from './LangSwitcherDep';
import { LangSwitcherRed } from './LangSwitcherRed';

/** @deprecated */
interface LangSwitcherProps {
    className?: string,

    /** @deprecated */
    short?: boolean,
}

/** Кнопка переключения языка */
export const LangSwitcher: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
    const {
        className,
        short,
    } = props;

    const { i18n } = useTranslation();

    const handler = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<LangSwitcherDep onClick={handler} short={short} className={className} />}
            on={<LangSwitcherRed onClick={handler} className={className} />}
        />
    );
});
