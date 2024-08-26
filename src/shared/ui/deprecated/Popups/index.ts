import { lazy } from 'react';

import type { PopoverType } from './ui/Popover/Popover';
import type { ListBoxType } from './ui/ListBox/ListBox';
import type { DropdownType } from './ui/Dropdown/Dropdown';

/** @deprecated */
export const Dropdown = lazy(() => import('./ui/Dropdown/Dropdown')) as DropdownType;
/** @deprecated */
export const ListBox = lazy(() => import('./ui/ListBox/ListBox')) as ListBoxType;
/** @deprecated */
export const Popover = lazy(() => import('./ui/Popover/Popover')) as PopoverType;
