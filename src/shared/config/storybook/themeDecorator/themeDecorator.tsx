import { Decorator } from '@storybook/react';
import { ReactNode } from 'react';
// eslint-disable-next-line lkx-fsd/layer-checker
import '@/app/styles/index.scss';

import { ThemeProvider } from '@/shared/lib/components/ThemeProvider';
import { Theme } from '@/shared/lib/context/ThemeContext';

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

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme} ${cls.background}`}>
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
