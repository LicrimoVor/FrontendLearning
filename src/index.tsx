import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { ErrorBoundary } from '@/app/providers/ErrorBoudarie';
import { StoreProvider } from '@/app/providers/StoreProvider';

import App from '@/app/App';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ThemeProvider } from '@/shared/lib/components/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Чета сломалось');
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
