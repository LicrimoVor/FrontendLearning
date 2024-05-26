import { Decorator, StoryFn } from '@storybook/react';

import { getAllFeatureFlag, setFeatureFlags } from '@/shared/lib/features';

/** Декоратор для нового дизайна */
export const newDesignDecorator: Decorator = (Story: StoryFn) => {
    setFeatureFlags({ ...getAllFeatureFlag(), isAppRedesigned: true });

    return (
        <Story />
    );
};
