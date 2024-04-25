import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line lkx-fsd/layer-checker
import { StoreProvider } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { TestThemProvider } from '@/shared/config/storybook/themeDecorator';

import { Theme } from '../../context/ThemeContext';

interface componentRenderOptions {
    route?: string[],
    initialState?: DeepPartial<StateSchema>
}

interface TestProviderProps {
    children: ReactNode,
    options?: componentRenderOptions,
    theme?: Theme
}

export function TestProvider(props: TestProviderProps) {
    const {
        children,
        options = {},
        theme = Theme.LIGHT,
    } = props;

    return (
        <MemoryRouter initialEntries={options?.route} initialIndex={1}>
            <StoreProvider initialState={options?.initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTests}>
                    <TestThemProvider theme={theme}>
                        {children}
                    </TestThemProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

/** Декоратор для тестов. Добавляет стор, роутер и i18n */
export const componentRender = (
    component: ReactNode,
    options: componentRenderOptions = {},
): ReturnType<typeof render> => render(<TestProvider options={options}>{component}</TestProvider>);
