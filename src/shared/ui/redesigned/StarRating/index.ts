import { lazy } from 'react';
import type { StarRatingType } from './ui/StarRating';

export const StarRating = lazy(() => import('./ui/StarRating')) as StarRatingType;
