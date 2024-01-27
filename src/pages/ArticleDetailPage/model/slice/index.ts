import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailPageSchema } from '../types';
import { articleDetailCommentsReducer } from './articleDetailCommentsSlice';
import { articleDetailRecommendReducer } from './articleDetailRecommendSlice';

export const articleDetailPageReducer = combineReducers <ArticleDetailPageSchema>({
    recommend: articleDetailRecommendReducer,
    comments: articleDetailCommentsReducer,
});
