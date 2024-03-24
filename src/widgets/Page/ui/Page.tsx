import {
    FC, memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/shared/config/reduxConfig/stateShema';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/userInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/testProps';
import { getScrollSaveScrollByPath, scrollSaveActions } from '@/features/ScrollSave';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void,
}

export const PAGE_ID = 'PAGE_ID';

/** Обертка для страницы. */
export const Page: FC<PageProps> = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSaveScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
            id={PAGE_ID}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div
                    className={cls.trigger}
                    ref={triggerRef}
                />
            ) : null}
        </main>
    );
});
