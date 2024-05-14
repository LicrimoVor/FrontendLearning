import { FC, memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames';
import cls from './StickyComponentLayout.module.scss';

interface StickyComponentLayoutProps {
    className?: string,
    left?: ReactElement,
    content: ReactElement,
    right?: ReactElement,
}

/** Позволяет закреплять левые и правые части относительно контента */
export const StickyComponentLayout: FC<StickyComponentLayoutProps> = memo((
    props: StickyComponentLayoutProps,
) => {
    const {
        className,
        left,
        content,
        right,
    } = props;

    return (
        <div className={classNames(cls.StickyComponentLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
});
