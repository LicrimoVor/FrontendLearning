import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const storeDecorator: Decorator = (Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
