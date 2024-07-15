import {
    FC, memo, ReactElement, useMemo,
} from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { getOptionsIsOnline } from '@/shared/config/options';

import { PageMods } from '../types/pageMods';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string,
    header: ReactElement,
    content: ReactElement,
    sidebar: ReactElement,
    toolbar?: ReactElement,
    mods?: PageMods,
}

/** Главный макет страницы */
export const MainLayout: FC<MainLayoutProps> = memo((props: MainLayoutProps) => {
    const {
        className,
        header,
        content,
        sidebar,
        toolbar,
        mods,
    } = props;

    const isOnline = useSelector(getOptionsIsOnline);

    const classMods = useMemo(() => ({
        [cls.maxContentWidth]: mods?.maxContentWidth,
        [cls.offline]: !isOnline,
    }), [mods, isOnline]);

    return (
        <div className={classNames(cls.MainLayout, classMods, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={classNames(cls.content, classMods)}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
