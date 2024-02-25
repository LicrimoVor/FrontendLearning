import { Decorator } from '@storybook/react';
import '@/app/styles/index.scss';

/** Декоратор стилей для сторисов */
export const styleDecorator: Decorator = (Story) => (
    <div>
        <Story />
    </div>
);
