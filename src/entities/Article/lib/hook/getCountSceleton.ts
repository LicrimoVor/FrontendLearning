import { RefObject } from 'react';
import { ArticleView } from '../../model/consts/article';

// const HEIGHT_BIG =
const HEIGHT_SMALL = 300;
const WIDTH_SMALL = 230;

export const getCountSceleton = (
    refComponent: RefObject<HTMLDivElement>,
    view: ArticleView,
    cls: string,
) => {
    if (!refComponent.current) {
        return view === ArticleView.BIG ? 3 : 9;
    }

    if (view === ArticleView.SMALL) {
        const { width } = refComponent.current.getBoundingClientRect();
        const child = refComponent.current.querySelector(`.${cls}`) as HTMLDivElement;
        if (!child) {
            return 9;
        }
        const paddingTop = Number(child.style.paddingTop.split('px')[0]);

        if (paddingTop < HEIGHT_SMALL) {
            return 9;
        }
        const countWidth = width < WIDTH_SMALL ? 1 : Math.floor(width / WIDTH_SMALL);
        return countWidth;
    }
    return 3;
};
