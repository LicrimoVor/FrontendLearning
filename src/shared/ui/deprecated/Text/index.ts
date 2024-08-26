import { lazy } from 'react';
import type { TextType } from './ui/Text';

export {
    TextAlign, TextSize, TextTheme,
} from './ui/Text';

/** @deprecated */
export const Text = lazy(() => import('./ui/Text')) as TextType;
