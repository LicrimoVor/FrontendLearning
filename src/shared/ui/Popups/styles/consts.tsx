import { PopupDirection } from './types';
import cls from './popups.module.scss';

export const PopupDirectionConvert: Record<PopupDirection, string> = {
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight,
    'top left': cls.topLeft,
    'top right': cls.topRight,
};
