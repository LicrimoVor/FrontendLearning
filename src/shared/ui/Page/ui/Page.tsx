import {
    FC, memo, MutableRefObject, ReactNode, useRef,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface pageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void,
}

/** Обертка для страницы. */
export const Page: FC<pageProps> = memo((props: pageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div
                ref={triggerRef}
            />
        </section>
    );
});
