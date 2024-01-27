import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

/** Декоратор путей для сторисов */
export const routerDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
