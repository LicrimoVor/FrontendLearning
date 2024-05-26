/* eslint-disable lkx-fsd/layer-checker */
import { Decorator } from '@storybook/react';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { getFeatureFlag } from '@/shared/lib/features';

import cls from './themeDecorator.module.scss';

interface TestThemProviderProps {
    children: ReactNode,
    theme?: Theme,
}

export const TestThemProvider = (props: TestThemProviderProps) => {
    const {
        children,
        theme,
    } = props;

    const isNewDesigned = getFeatureFlag('isAppRedesigned');

    return (
        <ThemeProvider initialTheme={theme}>
            <div id="app" className={`${isNewDesigned ? 'app-redesigned' : 'app'} ${theme} ${cls.background}`}>
                {children}
            </div>
        </ThemeProvider>
    );
};

/** Декоратор тем для сторисов */
export const themeDecorator = (theme?: Theme): Decorator => (Story) => (
    <TestThemProvider theme={theme}>
        <Story />
    </TestThemProvider>
);
