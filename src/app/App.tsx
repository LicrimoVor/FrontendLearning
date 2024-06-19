import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { register, unregister } from '@/shared/lib/serviceWorker';
import { getUserInited, initAuthData } from '@/entities/User';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';

import { AppRouter } from './providers/router';
import { useAppToolBar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider';
import { useAppPageMods } from './lib/useAppPageMods';

/** Главная приложуха */
function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    const Toolbar = useAppToolBar();
    const pageMods = useAppPageMods();

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={<div className="app"><PageLoader /></div>}
                on={(
                    <div
                        id="app"
                        className={classNames('app-redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                )}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={(
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            )}
            on={(
                <div id="app" className={classNames('app-redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            toolbar={Toolbar}
                            mods={pageMods}
                        />
                    </Suspense>
                </div>
            )}
        />
    );
}

register();
export default withTheme(memo(App));
