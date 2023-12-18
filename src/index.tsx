import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import App from 'app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoudarie';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
