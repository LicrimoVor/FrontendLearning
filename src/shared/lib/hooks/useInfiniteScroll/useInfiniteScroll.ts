import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
    callback?: () => void,
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(props: UseInfiniteScrollOptions) {
    const {
        callback,
        triggerRef,
        wrapperRef,
    } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback !== undefined) {
            const options = {
                root: wrapperElement,
                rootMargin: '20px 45px 20px 45px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer) {
                observer.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
