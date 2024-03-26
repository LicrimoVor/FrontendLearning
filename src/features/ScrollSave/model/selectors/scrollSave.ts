import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

export const getScrollSaveScroll = (state: StateSchema) => state.scroll.scroll;
export const getScrollSaveScrollByPath = createSelector(
    getScrollSaveScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
